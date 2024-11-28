/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开发环境配置
  basePath: '',
  assetPrefix: '',
  // 生产环境配置
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '',
    // 使用相对路径或完整的域名
    assetPrefix: 'https://freeai.world',
    // 或者使用相对路径
    // assetPrefix: '',
  } : {}),
  // 添加输出配置
  output: 'export',  // 用于静态网站导出
}

module.exports = nextConfig