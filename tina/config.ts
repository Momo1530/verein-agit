import { defineConfig } from 'tinacms';

const hasCloudCredentials = Boolean(
  process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN
);

/**
 * All homepage text fields. `textarea` is used for long strings and for any
 * value that may contain inline HTML (e.g. `<br/>` or `<strong>`), because Tina
 * renders those in a multi-line editor instead of a single-line input.
 */
const TEXTAREA_FIELDS = new Set([
  'hero_headline',
  'hero_desc',
  'step_1_desc',
  'step_2_desc',
  'step_3_desc',
  'hintergrund_text',
  'form_subtitle',
  'form_success',
]);

const FIELDS: Array<{ name: string; label: string }> = [
  { name: 'nav_angebote', label: 'Navigation: Angebote' },
  { name: 'nav_haltung', label: 'Navigation: Haltung' },
  { name: 'nav_team', label: 'Navigation: Team' },
  { name: 'nav_kontakt', label: 'Navigation: Kontakt' },
  { name: 'nav_anfragen', label: 'Navigation: Projekt anfragen' },
  { name: 'hero_subtitle', label: 'Hero: Untertitel' },
  { name: 'hero_headline', label: 'Hero: Überschrift' },
  { name: 'hero_desc', label: 'Hero: Beschreibung' },
  { name: 'btn_angebote', label: 'Button: Angebote ansehen' },
  { name: 'btn_mehr', label: 'Button: Mehr über AGIT' },
  { name: 'action_header', label: 'Abschnitt: Was braucht Ihre Einrichtung?' },
  { name: 'step_1', label: 'Ebene 1: Titel' },
  { name: 'step_1_desc', label: 'Ebene 1: Beschreibung' },
  { name: 'step_2', label: 'Ebene 2: Titel' },
  { name: 'step_2_desc', label: 'Ebene 2: Beschreibung' },
  { name: 'step_3', label: 'Ebene 3: Titel' },
  { name: 'step_3_desc', label: 'Ebene 3: Beschreibung' },
  { name: 'hintergrund_title', label: 'Hintergrund: Titel' },
  { name: 'hintergrund_text', label: 'Hintergrund: Text' },
  { name: 'form_title', label: 'Formular: Titel' },
  { name: 'form_subtitle', label: 'Formular: Untertitel' },
  { name: 'form_name', label: 'Formular: Feld „Name“' },
  { name: 'form_email', label: 'Formular: Feld „E-Mail“' },
  { name: 'form_phone', label: 'Formular: Feld „Telefonnummer“' },
  { name: 'form_subject', label: 'Formular: Feld „Betreff“' },
  { name: 'form_message', label: 'Formular: Feld „Nachricht“' },
  { name: 'form_submit', label: 'Formular: Button „Senden“' },
  { name: 'form_success', label: 'Formular: Erfolgsmeldung' },
  { name: 'footer_desc', label: 'Footer: Vereinsbeschreibung' },
  { name: 'kontakt_title', label: 'Footer: Kontakt-Überschrift' },
  { name: 'impressum_title', label: 'Footer: Impressum-Überschrift' },
];

const LANGUAGES: Array<{ name: string; label: string }> = [
  { name: 'de', label: 'Deutsch' },
  { name: 'tr', label: 'Türkçe' },
  { name: 'ar', label: 'العربية' },
  { name: 'ku', label: 'Kurdî' },
  { name: 'bks', label: 'Bosanski' },
  { name: 'fa', label: 'فارسی' },
];

const languageGroups = LANGUAGES.map((lang) => ({
  type: 'object' as const,
  name: lang.name,
  label: `${lang.label} (${lang.name.toUpperCase()})`,
  fields: FIELDS.map((f) => ({
    type: 'string' as const,
    name: f.name,
    label: f.label,
    required: false,
    ...(TEXTAREA_FIELDS.has(f.name)
      ? { ui: { component: 'textarea' as const } }
      : {}),
  })),
}));

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
    collections: [
      {
        name: 'pages',
        label: 'Seiten',
        path: 'content/pages',
        format: 'json',
        match: { include: 'home' },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: languageGroups,
      },
    ],
  },
});
