/** @type {import('next-sitemap').IConfig} */

module.exports = {
  // Netlify variables https://docs.netlify.com/configure-builds/environment-variables/
  siteUrl: process.env.URL || "https://hatchhead.co",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
