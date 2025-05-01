const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  staticImage: true,
  latex: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "bn",
    localeDetection: false,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["img.icons8.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/javascript-guidebook-bn",
        permanent: true,
      },
    ];
  },
};

// Merge configurations
module.exports = withNextra(nextConfig);
