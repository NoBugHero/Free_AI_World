/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/freeai.world' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/freeai.world/' : '',
  trailingSlash: true,
}

module.exports = nextConfig