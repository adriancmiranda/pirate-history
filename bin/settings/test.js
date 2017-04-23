const webpack = require('webpack');
const base = require('../base');

module.exports = $ => base($).cfg({
  name: '[test]',
  entry: undefined,
  devtool: $('test.sourceMap'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': $('test.env'),
    }),
  ],
});
