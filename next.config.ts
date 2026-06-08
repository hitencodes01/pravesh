import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
   trailingSlash: true, 
  // basePath: "/pravesh",
  // assetPrefix: "/pravesh",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
