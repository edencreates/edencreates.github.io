/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Required for GitHub Pages
  assetPrefix: isProd ? "/edencreates.github.io/" : "", // Ensures assets load correctly
  basePath: isProd ? "/edencreates.github.io" : "", // Ensures proper routing
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  trailingSlash: true, // Ensures correct routing for GitHub Pages
};

export default nextConfig;
