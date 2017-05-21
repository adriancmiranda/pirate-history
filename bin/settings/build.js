const webpack = require('webpack');
const Strip = require('strip-loader');
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
    filename: $('path.output.script', `[name]${$('argv.minify') ? '.min' : ''}.js`),
    chunkFilename: $('path.output.script', `[id]${$('argv.minify') ? '.min' : ''}.js`),
    sourceMapFilename: $('path.output.script', `[name]${$('argv.minify') ? '.min' : ''}.map`),
    library: $('package.name').replace('pirate-', ''),
    libraryTarget: $('argv.target'),
    umdNamedDefine: true,
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: Strip.loader('console.log'),
    }],
  },
})

// --------------------------------------------------------------------------
// *optional cleaning
// --------------------------------------------------------------------------
.cfg('plugins', !$('argv.dirty') ? [(() => {
  return new Clean([$('path.output.bundle')], {
    root: $('cwd'),
    verbose: true,
  });
})()] : [])

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
.cfg('plugins', $('argv.gzip') ? [(() => {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');
  return new CompressionWebpackPlugin({
    algorithm: 'gzip',
    threshold: 300,
    minRatio: 0.8,
  }, $('build.gzip.options'), {
    test: new RegExp(`\\.(${[].concat($('argv.gzip')).join('|')})$`),
    asset: '[path].gz[query]',
    filename: (filename) => filename,
  });
})()] : [])

// --------------------------------------------------------------------------
// *optional: https://www.npmjs.com/package/webpack-bundle-analyzer
// --------------------------------------------------------------------------
.cfg('plugins', $('argv.analyze') ? [(() => {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  return new BundleAnalyzerPlugin(Object.assign({
    analyzerHost: 'localhost',
    analyzerPort: 8888,
    openAnalyzer: true,
    logLevel: 'info',
  }, $('build.bundleAnalyzer.options'), {
    analyzerMode: $('argv.analyze'),
    statsFilename: $('argv.statsFilename'),
    reportFilename: $('argv.reportFilename'),
  }));
})()] : [])
;
