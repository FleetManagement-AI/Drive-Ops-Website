import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const doc = new JSDOM(await readFile('dist/index.html','utf8')).window.document;
assert.equal(doc.querySelectorAll('h1').length,1);
assert.match(doc.querySelector('h1').textContent,/Your Fleet Operations\.\s*Under Control\./);
assert.equal(doc.querySelector('.hero-actions a').getAttribute('href'),'/contact/');
assert.equal(doc.querySelector('.hero-actions a:nth-child(2)').getAttribute('href'),'#how-it-works');
for (const slug of ['trips-dispatch','driver-app','live-fleet','fuel','maintenance','compliance','reviews','rentals'])
 assert(doc.querySelector(`main a[href="/product/${slug}/"]`),`Missing capability route ${slug}`);
assert.equal(doc.querySelectorAll('.industry-grid a').length,4);
assert(doc.querySelector('.tracking-note').textContent.includes('on duty'));
assert(doc.querySelector('.tracking-note').textContent.includes('phone GPS'));
assert(doc.querySelector('trip-demo'),'Retain the interactive trip demonstration');
const artwork = doc.querySelector('.hero-artwork img');
assert.equal(artwork.getAttribute('src'), '/images/illustrations/Modern Fleet Management Dashboard.webp');
assert.equal(artwork.getAttribute('width'), '1983');
assert.equal(artwork.getAttribute('height'), '793');
assert.equal(artwork.getAttribute('loading'), 'eager');
assert.equal(artwork.getAttribute('fetchpriority'), 'high');
await access('dist/images/illustrations/Modern Fleet Management Dashboard.webp');
assert.equal(doc.querySelector('.hero-features'), null);
const featureCards = [...doc.querySelectorAll('.feature-card')];
assert.equal(featureCards.length, 9);
for (const slug of ['trips-dispatch','drivers','vehicles','rentals','live-fleet','fuel','maintenance','compliance','reviews'])
 assert(doc.querySelector(`.feature-card[href="/product/${slug}/"]`), `Missing feature overview route ${slug}`);
for (const image of doc.querySelectorAll('.feature-card img')) {
 assert(image.getAttribute('src').startsWith('/images/driveops/features/'));
 assert(image.getAttribute('src').endsWith('.webp'));
 await access(`dist${image.getAttribute('src')}`);
}
assert.equal(doc.querySelector('.home-header .brand').getAttribute('href'), '/');
assert.equal(doc.querySelector('.home-link'), null);
assert.match(doc.querySelector('.nav-disclosure summary').textContent, /Features/);
const interior = new JSDOM(await readFile('dist/pricing/index.html','utf8')).window.document;
assert(!interior.querySelector('.home-header'));
assert.match(interior.querySelector('.nav-disclosure summary').textContent, /Product/);
assert(!/500\+|99%|50\+/.test(doc.querySelector('main').textContent),'No unverified proof statistics');
assert.equal(doc.querySelectorAll('main img[src="/images/driveops/hero.webp"]').length,0,'Interior-page hero artwork must not define the homepage identity');
for (const img of doc.querySelectorAll('img'))
 assert(img.hasAttribute('alt')&&img.hasAttribute('width')&&img.hasAttribute('height'),img.src);
assert(doc.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]'));
assert(doc.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]'));
assert(doc.querySelector('link[rel="stylesheet"][href^="https://fonts.googleapis.com/css2?family=Inter"]'));
assert(doc.querySelector('link[rel="stylesheet"][href*="Plus+Jakarta+Sans"]'));
console.log('Astro regression checks passed: homepage hero, feature navigation, capability routes, demo/contact paths, tracking conditions, typography loading, and image geometry.');
