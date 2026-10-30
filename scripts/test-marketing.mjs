import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { chromium } from "playwright";
import { loadManifest } from "./seo-manifest.mjs";

const { publicRoutes, legacyRoutes } = await loadManifest();
const dist = resolve("dist");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
// Deliberately no SPA fallback: this models directory-based static hosting.
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = resolve(dist, "." + pathname);
    if (!file.startsWith(dist + "/") && file !== dist) {
      res.writeHead(403);
      res.end();
      return;
    }
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        res.writeHead(301, { Location: pathname + "/" });
        res.end();
        return;
      }
      file = resolve(file, "index.html");
    }
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(await readFile(resolve(dist, "404.html")));
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  for (const route of publicRoutes)
    assert.equal((await fetch(base + route.path)).status, 200, route.path);
  assert.equal((await fetch(base + "/missing-page-check/")).status, 404);
  assert.equal((await fetch(base + "/product/not-a-product/")).status, 404);
  browser = await chromium.launch();
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  await nojs.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort(),
  );
  const page = await nojs.newPage();
  for (const topic of ["compliance", "fuel", "reviews"]) {
    assert.equal((await page.goto(`${base}/product/${topic}/`)).status(), 200);
    assert.equal(await page.locator("h1").count(), 1);
    assert((await page.locator("main details").count()) > 0);
    await page.locator("main summary").first().click();
    assert(await page.locator("main details[open] p").first().isVisible());
    assert.equal((await page.reload()).status(), 200);
  }
  for (const [alias, destination] of Object.entries(legacyRoutes)) {
    await page.goto(base + alias);
    await page.waitForURL("**" + destination);
    assert.equal(await page.locator("h1").count(), 1);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  assert.equal(await page.locator(".hero-actions a").count(), 2);
  assert.equal(await page.locator(".industry-grid a").count(), 4);
  assert.equal(
    await page
      .locator(".site-header")
      .evaluate((el) => getComputedStyle(el).position),
    "static",
  );
  await page
    .locator("#site-navigation summary")
    .filter({ hasText: "Product" })
    .click();
  assert(
    await page
      .locator('#site-navigation a[href="/product/reviews/"]')
      .isVisible(),
  );
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  );
  await nojs.close();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  await context.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort(),
  );
  await context.addInitScript(() => {
    window.__DRIVEOPS_EXPORT__ = true;
    window.marketingEvents = [];
    window.gtag = (...args) => window.marketingEvents.push(args);
    document.addEventListener("click", (event) => {
      const a = event.target.closest?.("a");
      if (
        a?.hostname === "driveops.chatserve.in" ||
        a?.pathname === "/contact/"
      )
        event.preventDefault();
    });
  });
  const client = await context.newPage();
  const errors = [];
  client.on("pageerror", (error) => errors.push(error.message));
  await client.goto(base + "/");
  await client.evaluate(() => {
    window.marketingEvents = [];
    window.gtag = (...args) => window.marketingEvents.push(args);
  });
  await client.locator('.hero-actions a[href="/contact/"]').click();
  const clicks = await client.evaluate(() =>
    window.marketingEvents.filter(
      (args) => args[0] === "event" && args[1] === "marketing_cta_click",
    ),
  );
  assert.equal(clicks.length, 1);
  assert.equal(clicks[0][2].cta_type, "contact");
  for (const width of [1440, 1280, 768, 390, 360]) {
    await client.setViewportSize({ width, height: 900 });
    await client.goto(base + "/");
    await client.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map((image) => image.decode()));
      await document.fonts.ready;
    });
    assert.equal(
      await client.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `Homepage overflow at ${width}`,
    );
    assert.equal(await client.locator(".industry-grid a").count(), 4);
    assert.equal(
      await client
        .locator("img")
        .evaluateAll(
          (images) => images.filter((image) => !image.naturalWidth).length,
        ),
      0,
    );
    await client.screenshot({
      path: `/tmp/driveops-verified-home-${width}.png`,
      fullPage: true,
    });
    await client.screenshot({
      path: `/tmp/driveops-verified-hero-${width}.png`,
    });
    await client.getByRole("button", { name: "Show completed stage" }).click();
    assert.equal(
      await client.locator("[data-trip-status]").textContent(),
      "Completed",
    );
    if (width < 900) {
      const toggle = client.locator(".menu-toggle");
      await toggle.click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "true");
      await client.keyboard.press("Escape");
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      assert(await toggle.evaluate((el) => el === document.activeElement));
      await toggle.click();
      await client
        .locator("#site-navigation summary")
        .filter({ hasText: "Product" })
        .click();
      await client
        .locator('#site-navigation a[href="/product/reviews/"]')
        .click();
      await client.waitForURL("**/product/reviews/");
      assert.equal(
        await client
          .getByRole("button", { name: "Open navigation", exact: true })
          .getAttribute("aria-expanded"),
        "false",
      );
    }
  }
  for (const route of [
    "/product/",
    "/product/compliance/",
    "/product/fuel/",
    "/product/reviews/",
    "/solutions/taxi-cab-fleets/",
    "/pricing/",
    "/faq/",
    "/contact/",
    "/fleet-management-software-india/",
  ]) {
    await client.goto(base + route);
    assert.equal(await client.locator("h1").count(), 1, route);
    assert.equal(
      await client.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      route,
    );
    await client.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map((image) => image.decode()));
    });
    await client.screenshot({
      path: `/tmp/driveops-verified-${route.split("/").filter(Boolean).join("-")}-mobile.png`,
      fullPage: true,
    });
  }
  await client.goto(base + "/product/");
  await client.getByRole("tab", { name: "Rentals", exact: true }).click();
  assert.equal(
    await client
      .getByRole("tab", { name: "Rentals", exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  await client.keyboard.press("Home");
  assert.equal(
    await client
      .getByRole("tab", { name: "Dispatch", exact: true })
      .getAttribute("aria-selected"),
    "true",
  );
  const reduced = await browser.newContext({
    reducedMotion: "reduce",
    viewport: { width: 390, height: 844 },
  });
  await reduced.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort(),
  );
  const motion = await reduced.newPage();
  await motion.goto(base + "/");
  assert.equal(
    await motion
      .getByRole("button", { name: "Play trip demonstration" })
      .getAttribute("aria-pressed"),
    "false",
  );
  await reduced.close();
  assert.deepEqual(errors, []);
  console.log(
    `Marketing browser checks passed: ${publicRoutes.length} direct routes, 404s, no-JS FAQs, legacy redirects, CTA analytics, five viewport widths, mobile navigation/focus, trip stages, product tabs, reduced motion and responsive interior pages.`,
  );
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
