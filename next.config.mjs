const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '' : undefined,
  assetPrefix: isProd ? '/' : undefined,
  output: 'export', // Ensures static export for GitHub Pages
  trailingSlash: true, // Helps with serving static files correctly
};
