#!/usr/bin/env node
/**
 * Regenerate tina/config.ts from the content JSON files in content/pages/.
 *
 * ⚠️  This OVERWRITES tina/config.ts. Edit the label maps below (not the
 * generated file) when you want different Tina UI labels.
 *
 * One collection per page. Each collection has one object group per language,
 * holding every text field of that page. Fields whose value is an array of
 * objects become `type: 'object', list: true` with nested textarea fields.
 *
 * Run: node scripts/build-tina-config.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = ['home', 'angebote', 'haltung', 'team', 'kontakt', 'impressum', 'datenschutz'];

const PAGE_LABELS = {
  home: 'Startseite',
  angebote: 'Angebote',
  haltung: 'Haltung',
  team: 'Team',
  kontakt: 'Kontakt',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
};

const LANGUAGES = [
  { name: 'de', label: 'Deutsch' },
  { name: 'tr', label: 'Türkçe' },
  { name: 'ar', label: 'العربية' },
  { name: 'ku', label: 'Kurdî' },
  { name: 'bks', label: 'Bosanski' },
  { name: 'fa', label: 'فارسی' },
];

const FIELD_LABELS = {
  nav_angebote: 'Navigation: Angebote',
  nav_haltung: 'Navigation: Haltung',
  nav_team: 'Navigation: Team',
  nav_kontakt: 'Navigation: Kontakt',
  nav_anfragen: 'Navigation: Projekt anfragen',
  hero_title: 'Hero: Überschrift',
  hero_desc: 'Hero: Beschreibung',
  hero_subtitle: 'Hero: Untertitel',
  hero_headline: 'Hero: Überschrift',
  btn_angebote: 'Button: Angebote ansehen',
  btn_mehr: 'Button: Mehr über AGIT',
  action_header: 'Abschnitt: Was braucht Ihre Einrichtung?',
  step_1: 'Ebene 1: Titel',
  step_1_desc: 'Ebene 1: Beschreibung',
  step_2: 'Ebene 2: Titel',
  step_2_desc: 'Ebene 2: Beschreibung',
  step_3: 'Ebene 3: Titel',
  step_3_desc: 'Ebene 3: Beschreibung',
  hintergrund_title: 'Hintergrund: Titel',
  hintergrund_text: 'Hintergrund: Text',
  section1_title: 'Angebot 1: Titel',
  section1_text: 'Angebot 1: Text',
  section2_title: 'Angebot 2: Titel',
  section2_text: 'Angebot 2: Text',
  section3_title: 'Angebot 3: Titel',
  section3_text: 'Angebot 3: Text',
  cta_title: 'Abschluss: Titel',
  cta_text: 'Abschluss: Text',
  cta_btn: 'Abschluss: Button',
  leitbild_title: 'Leitbild: Titel',
  leitbild_text: 'Leitbild: Text',
  values_title: 'Werte: Überschrift',
  values: 'Werte',
  approach_title: 'Ansatz: Titel',
  approach_text: 'Ansatz: Text',
  team_intro: 'Team: Einleitung',
  team_subtitle: 'Team: Untertitel',
  person1_name: 'Person 1: Name',
  person1_bio: 'Person 1: Beschreibung',
  person1_email: 'Person 1: E-Mail',
  person1_phone: 'Person 1: Telefon',
  person2_name: 'Person 2: Name',
  person2_bio: 'Person 2: Beschreibung',
  person2_email: 'Person 2: E-Mail',
  person2_phone: 'Person 2: Telefon',
  form_title: 'Formular: Titel',
  form_subtitle: 'Formular: Untertitel',
  form_name: 'Formular: Feld „Name“',
  form_email: 'Formular: Feld „E-Mail“',
  form_phone: 'Formular: Feld „Telefonnummer“',
  form_subject: 'Formular: Feld „Betreff“',
  form_message: 'Formular: Feld „Nachricht“',
  form_submit: 'Formular: Button „Senden“',
  form_success: 'Formular: Erfolgsmeldung',
  form_error: 'Formular: Fehlermeldung',
  contact_direct: 'Direkter Kontakt: Überschrift',
  contact_name: 'Direkter Kontakt: Vereinsname',
  contact_address: 'Direkter Kontakt: Adresse',
  contact_email: 'Direkter Kontakt: E-Mail',
  last_updated: 'Stand (Datum)',
  sections: 'Abschnitte',
  title: 'Titel',
  desc: 'Beschreibung',
  content: 'Inhalt',
  footer_desc: 'Footer: Vereinsbeschreibung',
  kontakt_title: 'Footer: Kontakt-Überschrift',
  impressum_title: 'Footer: Impressum-Überschrift',
};

const label = (key) => FIELD_LABELS[key] || key;

/**
 * Build a Tina field definition for one content key.
 * `sample` MUST be the value from the same language we are generating for —
 * it decides whether the field is a list, an object, or a plain string.
 */
function fieldFor(key, sample) {
  if (Array.isArray(sample)) {
    const itemKeys = Object.keys(sample[0] || {});
    return {
      type: 'object',
      name: key,
      label: label(key),
      list: true,
      fields: itemKeys.map((ik) => ({
        type: 'string',
        name: ik,
        label: label(ik),
        required: false,
        // list contents are long prose with inline HTML — always a textarea
        ui: { component: 'textarea' },
      })),
    };
  }
  const isLong = typeof sample === 'string' && sample.length > 60;
  return {
    type: 'string',
    name: key,
    label: label(key),
    required: false,
    ...(isLong ? { ui: { component: 'textarea' } } : {}),
  };
}

const collections = [];
for (const page of PAGES) {
  const contentFile = path.join(ROOT, 'content/pages', page + '.json');
  if (!fs.existsSync(contentFile)) throw new Error('fehlt: ' + contentFile);
  const data = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
  const keys = Object.keys(data.de);

  const languageGroups = LANGUAGES.map((lang) => ({
    type: 'object',
    name: lang.name,
    label: `${lang.label} (${lang.name.toUpperCase()})`,
    // NOTE: index by lang.name — data[lang] would be undefined and every
    // field would silently fall back to plain `string`, breaking list fields.
    fields: keys.map((k) => fieldFor(k, data[lang.name]?.[k])),
  }));

  collections.push({
    name: page,
    label: PAGE_LABELS[page],
    path: 'content/pages',
    format: 'json',
    match: { include: page },
    ui: { allowedActions: { create: false, delete: false } },
    fields: languageGroups,
  });
}

const ts = `import { defineConfig } from 'tinacms';

const hasCloudCredentials = Boolean(
  process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN
);

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  client: {
    skip: !hasCloudCredentials,
  },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || process.env.TINA_TOKEN || '',
      stopwordLanguages: ['deu'],
    },
  },
  schema: {
    collections: ${JSON.stringify(collections, null, 6)},
  },
});
`;

fs.writeFileSync(path.join(ROOT, 'tina/config.ts'), ts);

// ---- report ----
console.log('tina/config.ts geschrieben\n');
console.log('Collection'.padEnd(15) + 'Label'.padEnd(15) + 'Sprachen  Felder (davon Listen)');
console.log('-'.repeat(62));
let total = 0;
for (const c of collections) {
  const f = c.fields[0].fields;
  const lists = f.filter((x) => x.list);
  total += f.length * c.fields.length;
  console.log(
    c.name.padEnd(15) +
    c.label.padEnd(15) +
    String(c.fields.length).padEnd(9) +
    `${f.length}` + (lists.length ? ` (${lists.map((l) => l.name + '[' + l.fields.length + ']').join(', ')})` : '')
  );
}
console.log('-'.repeat(62));
console.log('Editierbare Werte gesamt:', total);
