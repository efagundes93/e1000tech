// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://e1000.tech',
  output: 'static',
  integrations: [
    mermaid({
      theme: 'neutral',
      autoTheme: true,
      mermaidConfig: {
        themeVariables: {
          fontSize: '13px',
        },
        flowchart: {
          htmlLabels: true,
          useMaxWidth: true,
          padding: 8,
          nodeSpacing: 32,
          rankSpacing: 38,
        },
        sequence: {
          actorFontSize: 13,
          messageFontSize: 12,
          noteFontSize: 12,
          diagramMarginX: 24,
          diagramMarginY: 16,
          boxMargin: 8,
        },
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
