/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  compiler: {
    removeConsole: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig