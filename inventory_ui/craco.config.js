// const imageOptimizer = require('craco-image-optimizer-plugin');
const CracoWorkboxPlugin = require('craco-workbox');
const path = require('path');
const scopedCss = require('craco-plugin-scoped-css');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoWorkboxPlugin,
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          app: path.resolve(__dirname, 'src'),
          public: path.resolve(__dirname, 'public'),
          // todo enable after creating folders
          //   components: './src/components',
          //   modules: './src/modules',
          //   utils: './src/utils',
          //   store: './src/store',
          //   images: './src/assets/images',
          //   icons: './src/assets/icons',
          //   assets: './src/assets',
          //   apis: './src/apis',
          //   actions: './src/actions',
          //   reducers: './src/reducers',
          //   constants: './src/constants',
          //   sass: 'app/sass',
        },
      },
    },
    {
      plugin: scopedCss,
    },
  ],
};
