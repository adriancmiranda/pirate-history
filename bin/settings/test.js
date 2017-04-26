const webpack = require('webpack');
const commonTemplate = require('../templates');

module.exports = $ => commonTemplate($).cfg({
  name: '[test]',
  target: 'web',
  entry: undefined,
  devtool: $('test.sourceMap'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': $('test.env'),
    }),
  ],
});
