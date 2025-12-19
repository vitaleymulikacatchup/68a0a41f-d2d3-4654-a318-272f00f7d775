import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'webuild-dev.s3.eu-north-1.amazonaws.com',
          },
      ],
  },
};

export default nextConfig;
