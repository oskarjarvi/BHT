import React from "react";
import Storyblok from "../lib/storyblok";
const generateSitemap = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((slug) => {
        return `<url> <loc>https://bedashunddagisochtraning.se/${slug}</loc></url>`;
      })
      .join("")}
    </urlset>`;
};

export async function getServerSideProps({ req, res }) {
  let { data } = await Storyblok.get("cdn/links/");
  let paths = [];

  Object.keys(data.links).forEach((linkKey) => {
    // don't create routes for folders and the index page
    if (
      data.links[linkKey].is_folder ||
      data.links[linkKey].slug === "config"
    ) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;

    paths.push(slug);
  });
  console.log(paths);
  res.setHeader("Content-Type", "text/xml");
  if (paths.length > 0) {
    res.write(generateSitemap(paths));
  }
  res.end();

  return {
    props: {},
  };
}
const SiteMap = () => <div />;
export default SiteMap;
