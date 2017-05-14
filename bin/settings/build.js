const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const pirateFlag = require('pirate-flag');
const commonTemplate = require('../templates');

module.exports = $ => commonTemplate($).cfg({
  name: '[build]',
  target: 'web',
  bail: true,
  devtool: $('build.sourceMap'),
  output: {
    publicPath: $('build.assetsPublicPath'),
    filename: $('path.output.script', '[name].min.js'),
    chunkFilename: $('path.output.script', '[id].min.js'),
    sourceMapFilename: $('path.output.script', '[name].min.map'),
    library: $('package.name').replace('pirate-', ''),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new Clean([$('path.output.bundle')], {
      root: $('cwd'),
      verbose: true,
    }),
  ],
})

// --------------------------------------------------------------------------
// *optional minification
// --------------------------------------------------------------------------
.cfg('plugins', $('argv.minify') ? [(() => {
  return new webpack.optimize.UglifyJsPlugin(Object.assign({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }, $('script.uglify'), {
    sourceMap: $('build.sourceMap'),
  }));
})()] : [])

// --------------------------------------------------------------------------
// *optional signature
// --------------------------------------------------------------------------
.cfg('plugins', $('argv.sign') ? [(() => {
  return new webpack.BannerPlugin({
    banner: pirateFlag($('package'), {
      moment: $('now'),
      commit: $('git.commithash'),
      homepage: $('package.homepage'),
      author: $('package.author'),
      license: $('package.license'),
    }),
  });
})()] : [])

// --------------------------------------------------------------------------
// *optional: https://www.npmjs.com/package/compression-webpack-plugin
// --------------------------------------------------------------------------
.cfg('plugins', $('build.gzip.compress') ? [(() => {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');
  return new CompressionWebpackPlugin({
    algorithm: 'gzip',
    threshold: 300,
    minRatio: 0.8,
  }, $('build.gzip.options'), {
    test: new RegExp(`\\.(${$('build.gzip.extensions').join('|')})$`),
    asset: '[path].gz[query]',
  });
})()] : [])

// --------------------------------------------------------------------------
// *optional: https://www.npmjs.com/package/webpack-bundle-analyzer
// --------------------------------------------------------------------------
.cfg('plugins', $('build.bundleAnalyzer.report') ? [(() => {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  return new BundleAnalyzerPlugin(Object.assign({}, $('build.bundleAnalyzer.options')));
})()] : [])
;
