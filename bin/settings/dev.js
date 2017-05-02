const webpack = require('webpack');
const Html = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonTemplate = require('../templates');

module.exports = $ => commonTemplate($).cfg('entry', {
  'dev-cycle': [
    `webpack-dev-server/client?http://${$('dev.server.host')}:${$('dev.server.port')}`,
    'webpack/hot/only-dev-server',
    $('cwd', $('path.entry[dev-cycle]'), $('dev.cycle.entry')),
  ],
}, v => v).cfg({
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
    new Html(Object.assign({}, $('dev.view.data'), {
      env: JSON.parse($('dev.env.NODE_ENV')),
      title: `${$('package.name')} // ${$('package.description')}`,
      template: `!!pug-loader!${$('path.entry[dev-cycle]', $('dev.cycle.view'))}`,
      minify: false,
      inject: false,
      chunksSortMode: (a, b) => {
        const devCycle = ['dev-cycle', 'main'];
        const names = Object.keys($('script.entry')).concat(devCycle);
        return names.indexOf(a.names[0]) - names.indexOf(b.names[0]);
      },
    })),
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
