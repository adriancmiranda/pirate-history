const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const base = require('../base');

module.exports = $ => base($).cfg({
  name: '[test]',
  target: 'node',
  entry: undefined,
  devtool: $('test.sourceMap'),
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': $('test.env'),
    }),
  ],
});
