const path = require('path');


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'static/vue': '',
  outputDir: path.join(__dirname, '../../backend/static/vue'),
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "primeflex/src/_variables.scss";
  //       `
  //     }
  //   }
  // },
}