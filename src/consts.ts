// Metadados centrais do site. Usados pelo SEO.astro, layouts, RSS e OG images.

export const SITE_TITLE = "e1000";
export const SITE_TAGLINE = "Engenharia, produto e as decisões por trás do Kikwiflow.";
export const SITE_DESCRIPTION =
  "Notas técnicas e de visão de mundo de Emiliano — founder da atoxfy e idealizador do Kikwiflow — sobre engenharia de software, IA aplicada e as decisões de produto por trás delas.";
export const SITE_URL = "https://e1000.tech";

export const AUTHOR_NAME = "Emiliano";
export const AUTHOR_ROLE = "Founder da atoxfy · Idealizador do Kikwiflow";
export const AUTHOR_BIO =
  "Construo o Kikwiflow, plataforma da atoxfy que conecta automação determinística e agentes de IA no ciclo de desenvolvimento. Escrevo aqui sobre as decisões técnicas e de produto por trás desse trabalho.";

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
} as const;

export const NAV_LINKS = [
  { href: "/blog", label: "Posts" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const POSTS_PER_PAGE = 10;
