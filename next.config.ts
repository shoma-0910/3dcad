import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // 🔴 ここで Strict Mode を無効化
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
