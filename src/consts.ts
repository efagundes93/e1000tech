// Metadados centrais do site. Usados pelo SEO.astro, layouts, RSS e OG images.

export const SITE_TITLE = "e1000";
export const SITE_TAGLINE = "Vida, engenharia, produto e as decisões por trás da Atoxfy.";
export const SITE_DESCRIPTION =
  "Escrevo sobre a construção da atoxfy e do Kikwiflow, engenharia de software e os bastidores de carreira de quem usa a tecnologia para transformar realidades e gerar impacto real.";
export const SITE_URL = "https://e1000.tech";

export const AUTHOR_NAME = "Emiliano Fagundes";
export const AUTHOR_ROLE = "Founder da atoxfy";
export const AUTHOR_BIO =
  "Escrevo sobre a construção da atoxfy e do Kikwiflow, engenharia de software e os bastidores de carreira de quem usa a tecnologia para transformar realidades e gerar impacto real.";

export const SOCIAL_LINKS = {
  github: "https://github.com/efagundes93",
  linkedin: "https://www.linkedin.com/in/emilianofagundes/",
} as const;

export const NAV_LINKS = [
  { href: "/blog", label: "Posts" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const POSTS_PER_PAGE = 10;
