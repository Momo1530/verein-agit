#!/usr/bin/env node
/**
 * Verify each migrated page renders its own text from the JSON content files.
 * Checks the built HTML in out/ for characteristic strings per page.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// page → (output path, distinctive German strings that must appear in the HTML)
const CHECKS = {
  angebote:    ['angebote/index.html', ['Mikro-Ebene', 'Mezzo-Ebene', 'Makro-Ebene', 'konkretes Anliegen']],
  haltung:     ['haltung/index.html', ['Leitbild', 'Respekt']],
  team:        ['team/index.html', ['Kübra Erik', 'Murat Percin']],
  kontakt:     ['kontakt/index.html', ['Kontaktieren Sie uns', 'Direkter Kontakt']],
  impressum:   ['impressum/index.html', ['Medieninhaber', 'ZVR']],
  datenschutz: ['datenschutz/index.html', ['Verantwortlicher', 'Datenschutz']],
};

let fails = 0;
console.log('Seite'.padEnd(14) + 'HTML'.padEnd(10) + 'Prüfungen');
console.log('-'.repeat(78));

for (const [page, [rel, needles]] of Object.entries(CHECKS)) {
  const file = path.join(ROOT, 'out', rel);
  if (!fs.existsSync(file)) {
    console.log(page.padEnd(14) + '❌ fehlt');
    fails++;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const res = needles.map(n => (html.includes(n) ? '✅' : '❌' + n));
  const ok = res.every(r => r === '✅');
  if (!ok) fails++;
  console.log(page.padEnd(14) + (Math.round(html.length / 1024) + 'KB').padEnd(10) + res.join('  '));
}

console.log('-'.repeat(78));

// Language differentiation: every language must carry its own headline.
// home uses `hero_headline`, all other pages use `hero_title`.
console.log('\nSprach-Unterscheidung:');
const PAGES = {
  home: 'hero_headline',
  angebote: 'hero_title', haltung: 'hero_title', team: 'hero_title',
  kontakt: 'hero_title', impressum: 'hero_title', datenschutz: 'hero_title',
};
for (const [p, field] of Object.entries(PAGES)) {
  const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/pages', p + '.json'), 'utf8'));
  const langs = Object.keys(d);
  const vals = langs.map(l => String(d[l][field] ?? '').slice(0, 30));
  const uniq = new Set(vals.filter(Boolean)).size;
  const empty = vals.filter(v => !v).length;
  const ok = uniq === langs.length && empty === 0;
  if (!ok) fails++;
  console.log(`  ${p.padEnd(13)} ${String(uniq).padStart(2)}/${langs.length} eigenständig` +
    (empty ? `  ⚠️ ${empty} leer` : '') + `  [${field}]` + (ok ? '  ✅' : '  ❌'));
}

console.log('\n' + (fails === 0 ? '✅ Alles korrekt' : `❌ ${fails} Problem(e)`));
process.exit(fails === 0 ? 0 : 1);
