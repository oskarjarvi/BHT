const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["a.storyblok.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
