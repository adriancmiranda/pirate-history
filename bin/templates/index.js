const formatter = require('eslint-friendly-formatter');
const { baseTemplate } = require('webpack-cfg/templates');

module.exports = $ => baseTemplate($).cfg({
  context: $('context'),
  entry: $('script.entry'),
  output: {
    path: $('cwd', $('path.output.bundle')),
  },
  resolve: {
    alias: $('alias'),
    modules: [$('cwd', 'node_modules')],
  },
  module: {
    rules: [{
      enforce: 'pre',
      loader: 'eslint-loader',
      test: /\.js$/,
      options: Object.assign({ formatter }, $('script.eslint')),
      include: [
        $('cwd', $('path.source')),
        $('cwd', $('path.test')),
      ],
    }],
  },
});
