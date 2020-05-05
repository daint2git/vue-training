const path = require('path');
const srcPath = path.resolve(process.cwd(), 'src');

const defaultWebpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js');

module.exports = {
  stories: ['../src/**/stories.js'],
  webpackFinal: async config => {
    config.module.rules = defaultWebpackConfig.module.rules;
    config.resolve.alias = { ...config.resolve.alias, '@': srcPath };

    return config;
  },
};
