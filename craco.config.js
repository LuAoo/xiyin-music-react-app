const path = require('path');
let pathAlias = dir => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less');
/* 
配置别名
*/
module.exports = {
  webpack: {
    alias: {
      '@': pathAlias('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#C20C0C'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}