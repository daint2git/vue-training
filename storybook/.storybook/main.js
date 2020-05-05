const vueDefaultConfig = require('../node_modules/@vue/cli-service/webpack.config.js');
module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: async config => {
    config.module.rules = vueDefaultConfig.module.rules;

    return config;
  },
};
