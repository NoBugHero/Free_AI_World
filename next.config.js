/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/freeai.world',
  assetPrefix: '/freeai.world/',
}

module.exports = nextConfig;