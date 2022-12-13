/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  strictMode: true,
};

module.exports = nextConfig;
