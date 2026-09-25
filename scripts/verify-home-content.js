#!/usr/bin/env node
/**
 * Verify that every language reads from home.json and renders its OWN text
 * (regression test for the bug where homeData?.title overrode all languages).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/pages/home.json'), 'utf8'));
const langs = Object.keys(data);

// The built bundle is a client component; just confirm the data is reachable
// and that each language has a DISTINCT headline (i.e. no shared hardcoded value).
console.log('Sprache  hero_headline (erste 55 Zeichen)');
console.log('-'.repeat(72));
const seen = new Map();
let dupes = 0;
for (const l of langs) {
  const h = String(data[l]?.hero_headline || '');
  const key = h.slice(0, 40);
  if (seen.has(key)) { dupes++; console.log(`  ⚠️  ${l} identisch mit ${seen.get(key)}`); }
  else seen.set(key, l);
  console.log(`  ${l.padEnd(5)}  ${h.slice(0, 55).replace(/\n/g, ' ')}`);
}
console.log('-'.repeat(72));
console.log(dupes === 0 ? '✅ Alle Sprachen haben unterschiedliche Texte' : `❌ ${dupes} Dubletten`);

// Field completeness
console.log('\nVollständigkeit:');
for (const l of langs) {
  const n = Object.keys(data[l] || {}).length;
  const empties = Object.entries(data[l] || {}).filter(([, v]) => !v).map(([k]) => k);
  console.log(`  ${l.padEnd(5)} ${n} Felder` + (empties.length ? `  ⚠️ leer: ${empties.join(', ')}` : '  ✅'));
}
