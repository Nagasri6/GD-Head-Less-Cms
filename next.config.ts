import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-gd-headless-cms.pantheonsite.io',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gentledental.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
