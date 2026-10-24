import { chromium } from 'playwright'
import { preview } from 'vite'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { loadManifest } from './seo-manifest.mjs'

const { publicRoutes, legacyRoutes, siteUrl } = await loadManifest()
const server = await preview({ preview: { host: '127.0.0.1', port: 4174, strictPort: true }, logLevel: 'error' })
let browser
const pages = []
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
try {
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
  // Export only local assets, never contact analytics, fonts, maps, or third-party services.
  await context.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort())
  await context.addInitScript(() => {
    window.__DRIVEOPS_EXPORT__ = true
    document.addEventListener('DOMContentLoaded', () => { document.documentElement.dataset.exporting = 'true' }, { once: true })
  })
  const page = await context.newPage()
  for (const route of [...publicRoutes, { path: '/404/', indexable: false }]) {
    const errors = []
    const onError = error => errors.push(error.message)
    page.on('pageerror', onError)
    await page.goto(`http://127.0.0.1:4174${route.path}`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => document.querySelector('#root h1') && document.querySelector('link[rel="canonical"]') && document.querySelector('script[type="application/ld+json"]'))
    await page.waitForFunction(expected => document.querySelector('link[rel="canonical"]')?.getAttribute('href') === expected, `${siteUrl}${route.path}`)
    await page.evaluate(async () => {
      // Reveal scroll-triggered sections before capturing their actual rendered HTML.
      for (let y = 0; y < document.body.scrollHeight; y += 800) {
        window.scrollTo(0, y)
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(500)
    if (errors.length) throw new Error(`${route.path}: ${errors.join('; ')}`)
    const html = await page.evaluate(() => {
      const doc = document.documentElement.cloneNode(true)
      doc.removeAttribute('data-exporting')
      for (const el of doc.querySelectorAll('#root [style]')) {
        if (el.style.opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none' }
      }
      // Persist only the analytics bootstrap, not the script it loads at runtime.
      doc.querySelectorAll('script[src*="googletagmanager"]').forEach(el => el.remove())
      return '<!doctype html>\n' + doc.outerHTML
    })
    pages.push({ path: route.path, html })
    page.off('pageerror', onError)
    console.log(`Exported ${route.path}`)
  }
  // Write only after capture completes so the preview server always uses the original app shell.
  for (const { path, html } of pages) {
    const filename = path === '/404/' ? 'dist/404.html' : join('dist', path.slice(1), 'index.html')
    await mkdir(join(filename, '..'), { recursive: true })
    await writeFile(filename, html)
  }
  for (const [from, to] of Object.entries(legacyRoutes)) {
    const canonical = `${siteUrl}${to}`
    const html = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page moved | DriveOps</title><link rel="canonical" href="${escape(canonical)}"><meta http-equiv="refresh" content="0;url=${escape(to)}"></head><body><h1>This page has moved</h1><a href="${escape(canonical)}">Continue to DriveOps</a></body></html>`
    const folder = join('dist', from.slice(1))
    await mkdir(folder, { recursive: true })
    await writeFile(join(folder, 'index.html'), html)
  }
  const urls = publicRoutes.filter(route => route.indexable).map(route => `  <url><loc>${escape(siteUrl + route.path)}</loc><lastmod>${route.lastmod}</lastmod></url>`).join('\n')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
  await writeFile('dist/.nojekyll', '')
  console.log(`Static export complete: ${publicRoutes.length} pages, ${Object.keys(legacyRoutes).length} aliases, and a 404 page.`)
} finally {
  await browser?.close()
  await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()))
}
