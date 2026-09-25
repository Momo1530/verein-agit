import { defineConfig, defineSchema } from 'tinacms';

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  client: {
    skip: true,
  },
  local: true,
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
      indexerToken: process.env.TINA_TOKEN || '',
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
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => values?.title?.toLowerCase().replace(/ /g, '-') || 'seite',
          },
        },
        templates: [
          {
            name: 'home',
            label: 'Startseite',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Seiten-Titel',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Beschreibung / Text',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
              {
                type: 'image',
                name: 'heroImage',
                label: 'Hero-Bild',
              },
            ],
          },
          {
            name: 'generic',
            label: 'Allgemeine Seite',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Seiten-Titel',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Beschreibung / Text',
                ui: {
                  component: 'textarea',
                },
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
