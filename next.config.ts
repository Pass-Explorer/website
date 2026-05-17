import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marketing site is mostly static; SSG-friendly defaults below.
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
