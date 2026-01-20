import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("http://aljazirah.local/wp-content/uploads/**")],
    unoptimized: true,
  },
};

export default nextConfig;
