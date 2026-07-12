#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://cupid.archerlab.dev';
const LASTMOD = '2026-07-12';
const errors = [];

const HOME = [
  ['index.html', `${SITE}/`, 'ko'],
  ['index-en.html', `${SITE}/index-en`, 'en'],
  ['index-ja.html', `${SITE}/index-ja`, 'ja'],
  ['index-es.html', `${SITE}/index-es`, 'es'],
  ['index-fr.html', `${SITE}/index-fr`, 'fr'],
  ['index-de.html', `${SITE}/index-de`, 'de'],
  ['index-pt.html', `${SITE}/index-pt`, 'pt']
];

const PRIMARY_SEO_SLUGS = new Set([
  'muryo-misinsi-game',
  'free-dating-sim-no-download',
  'gakuen-renai-game-muryo-browser',
  'simulador-citas-gratis',
  'simulation-amour-gratuit',
  'dating-sim-kostenlos',
  'otome-navegador-gratis'
]);

const read = file => fs.readFileSync(path.join(ROOT, file), 'utf8');
const capture = (source, pattern) => (source.match(pattern) || [])[1] || '';
const fail = message => errors.push(message);
const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.keys(value).sort().reduce((result, key) => {
      result[key] = canonicalize(value[key]);
      return result;
    }, {});
  }
  return value;
}

function types(node) {
  return Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']].filter(Boolean);
}

const seoFiles = fs.readdirSync(path.join(ROOT, 'seo'))
  .filter(file => file.endsWith('.html'))
  .sort()
  .map(file => [`seo/${file}`, `${SITE}/seo/${file.replace(/\.html$/, '')}`]);

const indexable = [
  ...HOME.map(([file, url, lang]) => ({ file, url, lang, home: true })),
  ...seoFiles.map(([file, url]) => ({ file, url, lang: '', home: false }))
];

if (indexable.length !== 40) fail(`Expected 40 indexable pages, found ${indexable.length}`);

const canonicals = new Set();
let stableGame = '';

for (const page of indexable) {
  const html = read(page.file);
  const charsetIndex = html.search(/<meta\s+charset=/i);
  const charsetOffset = charsetIndex < 0 ? -1 : Buffer.byteLength(html.slice(0, charsetIndex), 'utf8');
  const lang = capture(html, /<html\s+lang="([^"]+)"/i);
  const title = capture(html, /<title>([\s\S]*?)<\/title>/i).trim();
  const description = capture(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = capture(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const robots = capture(html, /<meta\s+name="robots"\s+content="([^"]+)"/i);
  const ogUrl = capture(html, /<meta\s+property="og:url"\s+content="([^"]+)"/i);
  const ogSiteName = capture(html, /<meta\s+property="og:site_name"\s+content="([^"]+)"/i);
  const ogImages = [...html.matchAll(/<meta\s+property="og:image"\s+content="([^"]+)"/gi)];
  const hreflangs = [...html.matchAll(/<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/gi)];

  if (charsetOffset < 0 || charsetOffset > 1024) fail(`${page.file}: charset is outside the first 1024 bytes`);
  if (!title) fail(`${page.file}: missing title`);
  if (!description) fail(`${page.file}: missing description`);
  if (canonical !== page.url) fail(`${page.file}: canonical ${canonical || '(missing)'} does not match ${page.url}`);
  if (canonicals.has(canonical)) fail(`${page.file}: duplicate canonical ${canonical}`);
  canonicals.add(canonical);
  if (!lang) fail(`${page.file}: missing html lang`);
  if (page.lang && lang !== page.lang) fail(`${page.file}: expected lang ${page.lang}, found ${lang}`);
  if (!/index/i.test(robots) || /noindex/i.test(robots)) fail(`${page.file}: page is not indexable`);
  if (ogUrl !== page.url) fail(`${page.file}: og:url does not match canonical`);
  if (ogSiteName !== 'Cupid') fail(`${page.file}: og:site_name must be Cupid`);
  if (ogImages.length !== 1) fail(`${page.file}: expected one og:image, found ${ogImages.length}`);
  for (const property of ['og:image:type', 'og:image:width', 'og:image:height', 'og:image:alt']) {
    if (!html.includes(`property="${property}"`)) fail(`${page.file}: missing ${property}`);
  }
  if (!html.includes('name="twitter:image:alt"')) fail(`${page.file}: missing twitter:image:alt`);
  if (html.includes('seo-screenshots')) fail(`${page.file}: hidden SEO screenshot section is still present`);

  const slug = page.file.startsWith('seo/') ? path.basename(page.file, '.html') : '';
  const expectedAlternates = page.home || PRIMARY_SEO_SLUGS.has(slug) ? 8 : 0;
  if (hreflangs.length !== expectedAlternates) {
    fail(`${page.file}: expected ${expectedAlternates} hreflang entries, found ${hreflangs.length}`);
  }
  if (hreflangs.length && !hreflangs.some(match => match[1] === lang && match[2] === page.url)) {
    fail(`${page.file}: hreflang cluster is missing its self reference`);
  }

  const jsonScripts = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (jsonScripts.length !== 1) fail(`${page.file}: expected one JSON-LD block, found ${jsonScripts.length}`);
  for (const match of jsonScripts) {
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch (error) {
      fail(`${page.file}: invalid JSON-LD (${error.message})`);
      continue;
    }
    const graph = data['@graph'] || [data];
    const webPage = graph.find(node => types(node).includes('WebPage'));
    const game = graph.find(node => types(node).includes('VideoGame'));
    if (!webPage || webPage.url !== page.url || webPage['@id'] !== `${page.url}#webpage`) {
      fail(`${page.file}: WebPage schema does not match its canonical URL`);
    }
    if (!game || !types(game).includes('WebApplication')) {
      fail(`${page.file}: game schema must co-type VideoGame and WebApplication`);
      continue;
    }
    if (game['@id'] !== `${SITE}/#videogame` || game.name !== 'Cupid' || game.url !== `${SITE}/`) {
      fail(`${page.file}: game identity is not stable`);
    }
    if (game.applicationCategory !== 'GameApplication' || game.offers?.price !== 0) {
      fail(`${page.file}: SoftwareApplication fields are invalid`);
    }
    if (game.aggregateRating || game.review) fail(`${page.file}: unverified rating/review must not be emitted`);
    const normalized = JSON.stringify(canonicalize(game));
    if (!stableGame) stableGame = normalized;
    else if (normalized !== stableGame) fail(`${page.file}: game entity conflicts with other pages`);
    if (page.home && !graph.some(node => types(node).includes('WebSite') && node.name === 'Cupid')) {
      fail(`${page.file}: missing Cupid WebSite schema`);
    }
  }
}

// Keep high-impression Search Console queries aligned with their exact landing pages.
const observedQueryLinks = [
  ['index.html', '웹 미연시', '/seo/web-misinsi'],
  ['index.html', '미연시 무료', '/seo/misinsi-muryo'],
  ['index-ja.html', 'ブラウザ乙女ゲーム', '/seo/browser-otome-game-ja']
];
for (const [file, anchor, expectedHref] of observedQueryLinks) {
  const html = read(file);
  const match = html.match(new RegExp(`<a\\b[^>]*\\bhref="([^"]+)"[^>]*>\\s*${escapeRegExp(anchor)}\\s*</a>`, 'i'));
  if (!match) fail(`${file}: missing observed-query link ${anchor}`);
  else if (match[1] !== expectedHref) fail(`${file}: ${anchor} points to ${match[1]}, expected ${expectedHref}`);
}

const noindexFiles = [
  'game.html', 'game-en.html', 'game-ja.html', 'game-es.html', 'game-fr.html', 'game-de.html', 'game-pt.html',
  'gallery.html', 'gallery-en.html', 'gallery-ja.html', 'gallery-es.html', 'gallery-fr.html', 'gallery-de.html', 'gallery-pt.html'
];
for (const file of noindexFiles) {
  const html = read(file);
  const robots = capture(html, /<meta\s+name="robots"\s+content="([^"]+)"/i);
  if (!/noindex/i.test(robots) || !/follow/i.test(robots) || /nofollow/i.test(robots)) {
    fail(`${file}: expected noindex, follow`);
  }
}

const robotsTxt = read('robots.txt');
if (/^Disallow:/m.test(robotsTxt)) fail('robots.txt: noindex pages must remain crawlable');
if (!robotsTxt.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt: missing canonical sitemap URL');

const sitemap = read('sitemap.xml');
const sitemapBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => match[1]);
const sitemapUrls = new Set();
for (const block of sitemapBlocks) {
  const loc = capture(block, /<loc>([^<]+)<\/loc>/);
  const lastmod = capture(block, /<lastmod>([^<]+)<\/lastmod>/);
  const alternates = [...block.matchAll(/<xhtml:link\s+rel="alternate"/g)].length;
  const slug = loc.includes('/seo/') ? loc.split('/').pop() : '';
  const expectedAlternates = HOME.some(([, url]) => url === loc) || PRIMARY_SEO_SLUGS.has(slug) ? 8 : 0;
  if (!loc || sitemapUrls.has(loc)) fail(`sitemap.xml: missing or duplicate loc ${loc}`);
  sitemapUrls.add(loc);
  if (lastmod !== LASTMOD) fail(`sitemap.xml: ${loc} has stale lastmod ${lastmod}`);
  if (alternates !== expectedAlternates) fail(`sitemap.xml: ${loc} has ${alternates} alternate links`);
}
const expectedUrls = new Set(indexable.map(page => page.url));
for (const url of expectedUrls) if (!sitemapUrls.has(url)) fail(`sitemap.xml: missing ${url}`);
for (const url of sitemapUrls) if (!expectedUrls.has(url)) fail(`sitemap.xml: unexpected ${url}`);

const notFound = read('404.html');
if (!/noindex/i.test(notFound) || !notFound.includes(`${SITE}/`)) fail('404.html: missing noindex or canonical redirect target');
const headers = read('_headers');
for (const signal of ['https://:project.pages.dev/*', 'https://:version.:project.pages.dev/*', 'X-Robots-Tag: noindex']) {
  if (!headers.includes(signal)) fail(`_headers: missing ${signal}`);
}
if (!/\/\*\.txt\s*\r?\n\s*X-Robots-Tag:\s*noindex\b/i.test(headers)) {
  fail('_headers: deployed text artifacts must be noindex');
}

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO validation passed: ${indexable.length} indexable pages, ${noindexFiles.length} noindex pages, ${sitemapUrls.size} sitemap URLs.`);
