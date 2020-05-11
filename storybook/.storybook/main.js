const path = require('path');
const srcPath = path.resolve(process.cwd(), 'src');

const defaultWebpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = {
  stories: ['../src/**/stories.js'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-backgrounds'],
  webpackFinal: config => {
    config.module.rules = defaultWebpackConfig.module.rules;

    config.module.rules.push({
      test: /stories.js$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            prettierConfig: {
              printWidth: 100,
              singleQuote: false,
            },
          },
        },
      ],
      include: srcPath,
      enforce: 'pre',
    });

    config.resolve.alias = { ...config.resolve.alias, '@': srcPath };

    return config;
  },
};
