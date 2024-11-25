/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/Free_AI_World' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Free_AI_World/' : '',
  trailingSlash: true,
}

module.exports = nextConfig