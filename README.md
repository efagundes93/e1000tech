# e1000.tech

Blog pessoal — engenharia, produto e as decisões por trás do [Kikwiflow](https://kikwiflow.dev). Construído em [Astro](https://astro.build), 100% estático, sem CMS e sem custo de hospedagem.

## Stack

- **Astro** (output estático) + **MDX/Markdown** via Content Collections (`src/content.config.ts`)
- **Tailwind CSS v4** (plugin Vite) para os tokens de design — paleta "Editorial Técnico" (`src/styles/global.css`)
- **Shiki** para realce de código (embutido no Astro)
- **astro-mermaid** para diagramas ` ```mermaid ` (renderização client-side, tema `neutral`)
- **astro-og-canvas** para gerar as imagens de Open Graph em build-time, por post
- **@astrojs/sitemap** + **@astrojs/rss** + JSON-LD (`BlogPosting`/`Person`) para SEO

## Comandos

```bash
npm install
npm run dev        # servidor local em http://localhost:4321
npm run build      # build de produção em ./dist
npm run preview    # serve o build de produção localmente
npm run check      # type-check dos arquivos .astro/.ts
```

## Escrevendo um novo post

Crie um arquivo em `src/content/blog/meu-post.md` (use `.md`; veja a nota abaixo sobre MDX) com o frontmatter:

```yaml
---
title: "Título do post"
description: "Descrição usada no SEO, RSS e card do OG image."
pubDate: 2026-08-22
tags: ["tag1", "tag2"]
draft: false
---
```

O corpo aceita Markdown normal, blocos de código (` ```typescript `, ` ```java `, etc.) e diagramas Mermaid (` ```mermaid `).

> **Por que `.md` e não `.mdx`?** Os diagramas Mermaid são transformados em um bloco `<pre class="mermaid">` (nó HTML "raw"), e o compilador MDX desta versão do Astro não aceita nós HTML raw sem configuração extra. Arquivos `.md` passam pelo pipeline de Markdown padrão, que aceita normalmente. Use `.mdx` apenas em posts que realmente precisem de componentes Astro/React embutidos — e evite combinar com blocos mermaid nesse caso.

Cada post ganha automaticamente: página em `/blog/<slug>`, entrada no RSS (`/rss.xml`), entrada no sitemap, imagem OG em `/og/<slug>.png`, e páginas de tag em `/tags/<tag>`.

## Antes do primeiro deploy

- Atualize `SOCIAL_LINKS` (GitHub/LinkedIn) em `src/consts.ts` — hoje estão com placeholders.
- Confirme `AUTHOR_BIO`, `SITE_TAGLINE` e o texto de `/sobre` (`src/pages/sobre.astro`).
- Gere favicons adicionais (PNG/ICO) se quiser suporte mais amplo além do `favicon.svg` atual.

## Deploy (grátis)

O site é gerado como arquivos estáticos em `./dist` — funciona em qualquer host estático. Passos para Vercel:

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), "Add New Project" → importe o repositório. A Vercel detecta Astro automaticamente (build command `astro build`, output `dist`) — não é preciso configurar nada.
3. Após o primeiro deploy, vá em **Settings → Domains** e adicione `e1000.tech`. A Vercel mostra os registros DNS (geralmente um `A`/`ALIAS` para o domínio raiz, ou `CNAME` se preferir usar `www`) — configure-os no painel do seu registrador de domínio.
4. Não é necessária nenhuma variável de ambiente.

Alternativas igualmente gratuitas, sem mudar nada no projeto: **Netlify**, **Cloudflare Pages** ou **GitHub Pages** — todas suportam Astro estático nativamente.
