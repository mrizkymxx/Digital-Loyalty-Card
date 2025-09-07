import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Set turbopack root to silence the lockfile warning
  experimental: {
    turbo: {
      root: '/Users/muhammadrizky/project/digitalloyaltycard'
    }
  }
};

export default nextConfig;
