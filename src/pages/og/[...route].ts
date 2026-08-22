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
      [11, 55, 69],
      [17, 75, 95],
    ],
    border: { color: [219, 233, 236], width: 6, side: "block-start" },
    padding: 80,
    font: {
      title: { size: 64, weight: "Bold", color: [250, 249, 246], lineHeight: 1.2 },
      description: { size: 32, color: [219, 233, 236], lineHeight: 1.4 },
    },
  }),
});
