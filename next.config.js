module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/woo-metadata-tool' : '',
  experimental: {
    publicDirectory: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|jpg|jpeg|gif|svg|ico)$/,
      oneOf: [
        {
          test: /\.svg$/,
          issuer: /\.(js|jsx)$/,
          use: {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false
                }
              }
            }
          }
        }, {
          use: {
            loader: 'url-loader',
            options: {
              limit: 512,
              fallback: 'file-loader',
              name: '[name]-[hash].[ext]'
            }
          }
        }
      ]
    });
    return config;
  }
};
