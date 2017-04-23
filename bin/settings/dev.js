const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const base = require('../base');

module.exports = $ => base($).cfg({
  name: '[dev]',
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
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
