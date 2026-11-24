import { createServer } from 'vite'

export async function loadManifest() {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
  try {
    const { publicRoutes, legacyRoutes, canonicalOverrides, resolveCanonicalPath, isSitemapRoute } = await server.ssrLoadModule('/src/config/routes.ts')
    const { siteConfig } = await server.ssrLoadModule('/src/config/site.ts')
    return {
      publicRoutes,
      legacyRoutes,
      canonicalOverrides,
      resolveCanonicalPath,
      isSitemapRoute,
      siteUrl: siteConfig.siteUrl.replace(/\/$/, ''),
    }
  } finally {
    await server.close()
  }
}
