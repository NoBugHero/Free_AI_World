/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开发环境配置
  basePath: '',
  assetPrefix: '',
  // 生产环境配置
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '',
    assetPrefix: './',
    trailingSlash: true,
  } : {}),
  // 添加输出配置
  output: 'export',
  // 移除 webpack 配置，让 Next.js 处理样式
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig