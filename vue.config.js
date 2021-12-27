// vue.config.js
const path = require('path');
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // options...
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
};
