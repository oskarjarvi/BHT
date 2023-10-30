const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["a.storyblok.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    USER_ID: "user_itVWfWZqYk5I9MhLGhkxF",
    ACCESS_TOKEN: "3971d0c8e872170825ab6074e235c563",
    TEMPLATE_ID: "template_5qqeshh",
    SERVICE_ID: "service_apmw6qs",
    SECRET_ID: "JEdOlXk6KprI2graeLTBGwtt",
    ACCESS_ID: "JEdOlXk6KprI2graeLTBGwtt",
  },
};
