import { defineConfig } from 'tinacms';

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
    collections: [
      {
            "name": "home",
            "label": "Startseite",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "home"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "nav_angebote",
                                    "label": "Navigation: Angebote",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_haltung",
                                    "label": "Navigation: Haltung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_team",
                                    "label": "Navigation: Team",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_kontakt",
                                    "label": "Navigation: Kontakt",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "nav_anfragen",
                                    "label": "Navigation: Projekt anfragen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_subtitle",
                                    "label": "Hero: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_headline",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "btn_angebote",
                                    "label": "Button: Angebote ansehen",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "btn_mehr",
                                    "label": "Button: Mehr über AGIT",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "action_header",
                                    "label": "Abschnitt: Was braucht Ihre Einrichtung?",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1",
                                    "label": "Ebene 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_1_desc",
                                    "label": "Ebene 1: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2",
                                    "label": "Ebene 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_2_desc",
                                    "label": "Ebene 2: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3",
                                    "label": "Ebene 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "step_3_desc",
                                    "label": "Ebene 3: Beschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_title",
                                    "label": "Hintergrund: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hintergrund_text",
                                    "label": "Hintergrund: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "footer_desc",
                                    "label": "Footer: Vereinsbeschreibung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "kontakt_title",
                                    "label": "Footer: Kontakt-Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "impressum_title",
                                    "label": "Footer: Impressum-Überschrift",
                                    "required": false
                              }
                        ]
                  }
            ]
      },
      {
            "name": "angebote",
            "label": "Angebote",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "angebote"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section1_title",
                                    "label": "Angebot 1: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section1_text",
                                    "label": "Angebot 1: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section2_title",
                                    "label": "Angebot 2: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section2_text",
                                    "label": "Angebot 2: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "section3_title",
                                    "label": "Angebot 3: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "section3_text",
                                    "label": "Angebot 3: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "cta_title",
                                    "label": "Abschluss: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_text",
                                    "label": "Abschluss: Text",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "cta_btn",
                                    "label": "Abschluss: Button",
                                    "required": false
                              }
                        ]
                  }
            ]
      },
      {
            "name": "haltung",
            "label": "Haltung",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "haltung"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_title",
                                    "label": "Leitbild: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "leitbild_text",
                                    "label": "Leitbild: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "values_title",
                                    "label": "Werte: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "values",
                                    "label": "Werte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "desc",
                                                "label": "Beschreibung",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              },
                              {
                                    "type": "string",
                                    "name": "approach_title",
                                    "label": "Ansatz: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "approach_text",
                                    "label": "Ansatz: Text",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              }
                        ]
                  }
            ]
      },
      {
            "name": "team",
            "label": "Team",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "team"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_intro",
                                    "label": "Team: Einleitung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "team_subtitle",
                                    "label": "Team: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_name",
                                    "label": "Person 1: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_bio",
                                    "label": "Person 1: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person1_email",
                                    "label": "Person 1: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person1_phone",
                                    "label": "Person 1: Telefon",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_name",
                                    "label": "Person 2: Name",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_bio",
                                    "label": "Person 2: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "person2_email",
                                    "label": "Person 2: E-Mail",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "person2_phone",
                                    "label": "Person 2: Telefon",
                                    "required": false
                              }
                        ]
                  }
            ]
      },
      {
            "name": "kontakt",
            "label": "Kontakt",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "kontakt"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_title",
                                    "label": "Formular: Titel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subtitle",
                                    "label": "Formular: Untertitel",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_name",
                                    "label": "Formular: Feld „Name“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_email",
                                    "label": "Formular: Feld „E-Mail“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_phone",
                                    "label": "Formular: Feld „Telefonnummer“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_subject",
                                    "label": "Formular: Feld „Betreff“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_message",
                                    "label": "Formular: Feld „Nachricht“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_submit",
                                    "label": "Formular: Button „Senden“",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "form_success",
                                    "label": "Formular: Erfolgsmeldung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "form_error",
                                    "label": "Formular: Fehlermeldung",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_direct",
                                    "label": "Direkter Kontakt: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_name",
                                    "label": "Direkter Kontakt: Vereinsname",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_address",
                                    "label": "Direkter Kontakt: Adresse",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "contact_email",
                                    "label": "Direkter Kontakt: E-Mail",
                                    "required": false
                              }
                        ]
                  }
            ]
      },
      {
            "name": "impressum",
            "label": "Impressum",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "impressum"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  }
            ]
      },
      {
            "name": "datenschutz",
            "label": "Datenschutz",
            "path": "content/pages",
            "format": "json",
            "match": {
                  "include": "datenschutz"
            },
            "ui": {
                  "allowedActions": {
                        "create": false,
                        "delete": false
                  }
            },
            "fields": [
                  {
                        "type": "object",
                        "name": "de",
                        "label": "Deutsch (DE)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "tr",
                        "label": "Türkçe (TR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ar",
                        "label": "العربية (AR)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "ku",
                        "label": "Kurdî (KU)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "bks",
                        "label": "Bosanski (BKS)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  },
                  {
                        "type": "object",
                        "name": "fa",
                        "label": "فارسی (FA)",
                        "fields": [
                              {
                                    "type": "string",
                                    "name": "hero_title",
                                    "label": "Hero: Überschrift",
                                    "required": false
                              },
                              {
                                    "type": "string",
                                    "name": "hero_desc",
                                    "label": "Hero: Beschreibung",
                                    "required": false,
                                    "ui": {
                                          "component": "textarea"
                                    }
                              },
                              {
                                    "type": "string",
                                    "name": "last_updated",
                                    "label": "Stand (Datum)",
                                    "required": false
                              },
                              {
                                    "type": "object",
                                    "name": "sections",
                                    "label": "Abschnitte",
                                    "list": true,
                                    "fields": [
                                          {
                                                "type": "string",
                                                "name": "title",
                                                "label": "Titel",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          },
                                          {
                                                "type": "string",
                                                "name": "content",
                                                "label": "Inhalt",
                                                "required": false,
                                                "ui": {
                                                      "component": "textarea"
                                                }
                                          }
                                    ]
                              }
                        ]
                  }
            ]
      }
],
  },
});
