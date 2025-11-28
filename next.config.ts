import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rhlhswfxiviuowlkjkij.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
