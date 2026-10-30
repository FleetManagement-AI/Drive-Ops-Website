import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const doc = new JSDOM(await readFile('dist/index.html','utf8')).window.document;
assert.equal(doc.querySelectorAll('h1').length,1);
assert.match(doc.querySelector('h1').textContent,/Every trip\.\s*Everyone\s*in the loop/);
assert.equal(doc.querySelector('.hero-actions a').getAttribute('href'),'/contact/');
assert.equal(doc.querySelector('.hero-actions a:nth-child(2)').getAttribute('href'),'#how-it-works');
for (const slug of ['trips-dispatch','driver-app','live-fleet','fuel','maintenance','compliance','reviews','rentals'])
 assert(doc.querySelector(`main a[href="/product/${slug}/"]`),`Missing capability route ${slug}`);
assert.equal(doc.querySelectorAll('.industry-grid a').length,4);
assert(doc.querySelector('.tracking-note').textContent.includes('on duty'));
assert(doc.querySelector('.tracking-note').textContent.includes('phone GPS'));
assert(doc.querySelector('trip-demo'),'Retain the interactive trip demonstration');
assert.match(doc.querySelector('.hero-handoff').textContent,/sample data/);
assert(!/500\+|99%|50\+/.test(doc.querySelector('main').textContent),'No unverified proof statistics');
assert.equal(doc.querySelectorAll('main img[src*="/images/driveops/"]').length,0,'Old fleet illustration must not define the new identity');
for (const img of doc.querySelectorAll('img'))
 assert(img.hasAttribute('alt')&&img.hasAttribute('width')&&img.hasAttribute('height'),img.src);
for(const font of ['archivo-latin.woff2','instrument-sans-latin.woff2']){
 await access('dist/fonts/'+font);
 assert((await readFile('dist/fonts/'+font)).length<70000,'Keep the font payload small');
}
assert(doc.querySelector('link[rel="preload"][href="/fonts/archivo-latin.woff2"]'));
assert(!doc.querySelector('link[href*="fonts.googleapis.com"]'));
console.log('Astro regression checks passed: truthful trip story, capability routes, demo/contact paths, tracking conditions, preserved demonstration, local fonts and image geometry.');
