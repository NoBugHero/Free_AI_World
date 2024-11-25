/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/' : '',
  trailingSlash: true,
}

module.exports = nextConfig