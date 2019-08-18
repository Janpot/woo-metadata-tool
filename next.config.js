module.exports = {
  experimental: {
    publicDirectory: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|png|jpg|jpeg|gif|svg|ico)$/,
      oneOf: [
        {
          test: /\.svg$/,
          issuer: /\.(js|jsx|ts|tsx)$/,
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
              publicPath: `/_next/static/assets/`,
              outputPath: `static/assets/`,
              name: '[name]-[hash].[ext]'
            }
          }
        }
      ]
    });
    return config;
  }
};
