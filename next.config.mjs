/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Required for GitHub Pages (Next.js static export)
  assetPrefix: isProd ? "/edencreates.github.io/" : "", // Adjust for GitHub Pages
  basePath: isProd ? "/edencreates.github.io" : "", // Set correct base path
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
