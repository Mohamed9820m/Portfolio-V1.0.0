const webpack = require('webpack'); // Add this line at the beginning

module.exports = {
  webpack: (config, { isServer }) => {
    // Enable Webpack build worker for both client and server
    if (!isServer) {
      config.plugins.push(new webpack.LoaderOptionsPlugin({ options: {} }));
    }

    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
