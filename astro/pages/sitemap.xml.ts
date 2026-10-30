import type { APIRoute } from 'astro';
import { publicRoutes } from '../../src/config/routes';
import { site } from '../consts';
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicRoutes.filter(route => route.indexable).map(route => `<url><loc>${site.url}${route.path}</loc><lastmod>${route.lastmod}</lastmod></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
