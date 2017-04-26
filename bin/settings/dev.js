const { parse } = require('path');
const webpack = require('webpack');
const Html = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonTemplate = require('../templates');

module.exports = $ => commonTemplate($).cfg({
  name: '[dev]',
  target: 'web',
  devtool: $('dev.sourceMap'),
  devServer: $('dev.server'),
  output: {
    publicPath: $('dev.assetsPublicPath'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': $('dev.env'),
      'process.type': '"renderer"',
    }),
    new Html(Object.assign({}, $('view.data'), {
      env: JSON.parse($('dev.env.NODE_ENV')),
      title: `${$('package.name')} // ${$('package.description')}`,
      template: `!!pug-loader!${$('dev.view.entry')}`,
      minify: false,
    })),
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
