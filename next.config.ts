import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/paycheck-calculator/:path*.html',
        destination: '/tools/:path*',
        permanent: true,
      },
      {
        source: '/tools/:path*.html',
        destination: '/tools/:path*',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
