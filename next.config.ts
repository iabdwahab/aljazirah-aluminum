import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://alumjaz.com/wp/wp-content/uploads/**")],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
