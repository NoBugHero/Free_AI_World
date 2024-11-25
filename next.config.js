/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProduction ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  ...(isProduction ? {
    basePath: '/freeai.world',
    assetPrefix: '/freeai.world/',
  } : {
    basePath: '',
    assetPrefix: '',
  }),
}

module.exports = nextConfig;