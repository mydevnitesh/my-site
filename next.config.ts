import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/job-hunt",
        destination: "https://job-hunt-check.vercel.app/",
      },
      {
        source: "/job-hunt/:path*",
        destination: "https://job-hunt-check.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
