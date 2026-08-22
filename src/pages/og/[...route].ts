import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { SITE_TITLE, SITE_TAGLINE } from "../../consts";

const posts = await getCollection("blog", ({ data }) => !data.draft);

const pages = {
  home: { title: SITE_TITLE, description: SITE_TAGLINE },
  ...Object.fromEntries(
    posts.map((post) => [post.id, { title: post.data.title, description: post.data.description }])
  ),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: { title: string; description: string }) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [2, 8, 23],
      [15, 23, 42],
    ],
    border: { color: [124, 58, 237], width: 8, side: "block-start" },
    padding: 80,
    font: {
      title: { size: 64, weight: "Bold", color: [248, 250, 252], lineHeight: 1.2 },
      description: { size: 32, color: [196, 181, 253], lineHeight: 1.4 },
    },
  }),
});
