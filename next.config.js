const { env } = require('./config/environment')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Free_AI_World' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig