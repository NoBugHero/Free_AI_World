const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const env = {
  basePath: isProd && isGitHubPages ? '/Free_AI_World' : '',
  assetPrefix: isProd && isGitHubPages ? '/Free_AI_World/' : '',
}

module.exports = { env } 