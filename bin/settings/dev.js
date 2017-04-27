const { parse } = require('path');
const webpack = require('webpack');
const { prependEntries, appendEntries } = require('webpack-cfg/tools');
const Html = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonTemplate = require('../templates');

module.exports = $ => commonTemplate($).cfg('entry.devServerClient', [
  `webpack-dev-server/client?http://${$('dev.server.host')}:${$('dev.server.port')}`,
  'webpack/hot/only-dev-server',
  $('cwd', $('path.test', $('dev.entry.test'))),
]).cfg({
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
      template: `!!pug-loader!${$('path.test', $('dev.view.entry'))}`,
      minify: false,
      inject: false,
    })),
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
