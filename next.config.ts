import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gift-bot-site",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
