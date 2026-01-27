import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Turbopack root config
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
