import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname } from 'node:path'
import { chromium } from 'playwright'
import { loadManifest } from './seo-manifest.mjs'

const { publicRoutes, legacyRoutes } = await loadManifest()
const dist = resolve('dist')
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain' }
// Deliberately no SPA fallback: this models directory-based static hosting.
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    let file = resolve(dist, '.' + pathname)
    if (!file.startsWith(dist + '/') && file !== dist) { res.writeHead(403); res.end(); return }
    const info = await stat(file)
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: pathname + '/' }); res.end(); return }
      file = resolve(file, 'index.html')
    }
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
    res.end(await readFile(file))
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(await readFile(resolve(dist, '404.html')))
  }
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const base = `http://127.0.0.1:${server.address().port}`
let browser
try {
  for (const route of publicRoutes) assert.equal((await fetch(base + route.path)).status, 200, route.path)
  assert.equal((await fetch(base + '/missing-page-check/')).status, 404)
  assert.equal((await fetch(base + '/product/not-a-product/')).status, 404)
  browser = await chromium.launch()
  const nojs = await browser.newContext({ javaScriptEnabled: false })
  await nojs.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort())
  const page = await nojs.newPage()
  for (const topic of ['compliance', 'fuel', 'reviews']) {
    assert.equal((await page.goto(`${base}/product/${topic}/`)).status(), 200)
    assert.equal(await page.locator('h1').count(), 1)
    assert.equal(await page.locator('details').count(), 5)
    await page.locator('summary').first().click()
    assert(await page.locator('details[open] p').first().isVisible())
    assert.equal((await page.reload()).status(), 200)
  }
  for (const [alias, destination] of Object.entries(legacyRoutes)) {
    await page.goto(base + alias)
    await page.waitForURL('**' + destination)
    assert.equal(await page.locator('h1').count(), 1)
  }
  await nojs.close()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort())
  await context.addInitScript(() => {
    window.__DRIVEOPS_EXPORT__ = true
    window.marketingEvents = []
    window.gtag = (...args) => window.marketingEvents.push(args)
    document.addEventListener('click', event => {
      const a = event.target.closest?.('a')
      if (a?.hostname === 'driveops.chatserve.in') event.preventDefault()
    })
  })
  const client = await context.newPage()
  const errors = []
  client.on('pageerror', error => errors.push(error.message))
  await client.goto(base + '/product/reviews/')
  await client.waitForLoadState('networkidle')
  await client.waitForSelector('main details')
  await client.locator('main summary').first().click()
  assert(await client.locator('main details[open] p').first().isVisible())
  assert.equal(await client.locator('link[rel="canonical"]').count(), 1)
  await client.locator('main a[href="https://driveops.chatserve.in/signup"]').first().click()
  const clicks = await client.evaluate(() => window.marketingEvents.filter(args => args[0] === 'event' && args[1] === 'marketing_cta_click'))
  assert.equal(clicks.length, 1)
  assert.equal(clicks[0][2].topic, 'reviews')
  assert.equal(clicks[0][2].cta_type, 'signup')
  await client.screenshot({ path: '/tmp/driveops-reviews-desktop.png', fullPage: true })
  assert.equal(await client.getByRole('heading', { name: 'Ready to try DriveOps?' }).evaluate(el => getComputedStyle(el).color), 'rgb(255, 255, 255)')
  await client.setViewportSize({ width: 390, height: 844 })
  await client.goto(base + '/product/compliance/')
  await client.waitForLoadState('networkidle')
  await client.getByRole('button', { name: 'Open navigation menu' }).click()
  await client.locator('#mobile-nav').getByRole('link', { name: 'Review Management', exact: true }).click()
  await client.waitForURL('**/product/reviews/')
  await client.getByRole('button', { name: 'Open navigation menu' }).waitFor()
  await client.locator('#mobile-nav').waitFor({ state: 'hidden' })
  assert.equal(await client.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
  await client.screenshot({ path: '/tmp/driveops-reviews-mobile.png', fullPage: true })
  for (const topic of ['compliance', 'fuel']) {
    await client.goto(`${base}/product/${topic}/`)
    await client.waitForLoadState('networkidle')
  await client.waitForSelector('main details')
    assert.equal(await client.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${topic} overflows on mobile`)
  }
  await client.goto(base + '/')
  await client.waitForLoadState('networkidle')
  await client.waitForSelector('main details')
  assert(await client.getByRole('heading', { name: 'Bring passenger feedback into your operations inbox.' }).isVisible())
  assert.equal(await client.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Homepage overflows on mobile')
  assert.deepEqual(errors, [])
  console.log('Marketing browser checks passed: all direct routes, real 404s, no-JS FAQs, legacy redirects, mobile review navigation, CTA analytics, and responsive priority pages.')
} finally {
  await browser?.close()
  await new Promise(resolve => server.close(resolve))
}
