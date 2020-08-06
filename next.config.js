module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    })

    return config
  },
}