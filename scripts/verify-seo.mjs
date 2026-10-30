import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import { JSDOM } from "jsdom";
import { loadManifest } from "./seo-manifest.mjs";

const { publicRoutes, legacyRoutes, siteUrl } = await loadManifest();
const sitemap = new JSDOM(await readFile("dist/sitemap.xml", "utf8"), {
  contentType: "application/xml",
}).window.document;
const sitemapUrls = [...sitemap.querySelectorAll("loc")].map(
  (node) => node.textContent,
);
assert.equal(
  sitemapUrls.length,
  publicRoutes.filter((route) => route.indexable).length,
);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length);
const titles = new Set();
for (const route of [
  ...publicRoutes.filter((route) => route.path !== "/preview/"),
  { path: "/404/", indexable: false },
]) {
  const filename =
    route.path === "/404/"
      ? "dist/404.html"
      : join("dist", route.path.slice(1), "index.html");
  const doc = new JSDOM(await readFile(filename, "utf8")).window.document;
  const one = (selector) => {
    const nodes = doc.querySelectorAll(selector);
    assert.equal(nodes.length, 1, `${route.path}: expected one ${selector}`);
    return nodes[0];
  };
  const title = one("title").textContent;
  if (route.indexable) {
    assert(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
  }
  assert(one("h1").textContent.trim(), `${route.path}: empty H1`);
  assert(one('meta[name="description"]').content.length > 20);
  assert.equal(one('link[rel="canonical"]').href, siteUrl + route.path);
  assert.equal(
    one('meta[name="robots"]').content.includes("noindex"),
    !route.indexable,
  );
  const data = JSON.parse(
    one('script[type="application/ld+json"]').textContent,
  );
  assert.equal(
    data["@graph"].filter((node) => node["@type"] === "Organization").length,
    1,
  );
  assert.equal(
    data["@graph"].filter((node) => node["@type"] === "SoftwareApplication")
      .length,
    route.path === "/" ? 1 : 0,
  );
  const faq = data["@graph"].find((node) => node["@type"] === "FAQPage");
  for (const question of faq?.mainEntity || []) {
    assert(
      doc.querySelector("main").textContent.includes(question.name),
      `${route.path}: missing FAQ question`,
    );
    assert(
      doc
        .querySelector("main")
        .textContent.includes(question.acceptedAnswer.text),
      `${route.path}: FAQ answer missing from HTML`,
    );
  }
  assert.equal(sitemapUrls.includes(siteUrl + route.path), route.indexable);
  if (route.indexable) {
    for (const link of doc.querySelectorAll('a[href^="/"]')) {
      const pathname = new URL(link.getAttribute("href"), siteUrl).pathname;
      if (pathname === "/") continue;
      await access(join("dist", pathname.slice(1), "index.html")).catch(() => {
        throw new Error(`${route.path}: missing internal link ${pathname}`);
      });
    }
  }
}
for (const [from, to] of Object.entries({
  ...legacyRoutes,
  "/preview/": "/fleet-map/",
})) {
  const doc = new JSDOM(
    await readFile(join("dist", from.slice(1), "index.html"), "utf8"),
  ).window.document;
  assert.equal(doc.querySelector('link[rel="canonical"]').href, siteUrl + to);
  assert(doc.querySelector('meta[http-equiv="refresh"]').content.includes(to));
  assert(!sitemapUrls.includes(siteUrl + from));
}
console.log(
  `SEO checks passed for ${publicRoutes.length} pages, ${Object.keys(legacyRoutes).length} aliases, sitemap, FAQ HTML, metadata, structured data, and internal links.`,
);
