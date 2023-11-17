// next.config.js
module.exports = {
    webpack: (config) => {
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
  