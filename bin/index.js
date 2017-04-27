const GitRevisionPlugin = require('git-revision-webpack-plugin');
const { alias } = require('webpack-cfg/tools');
const webpackCfg = require('webpack-cfg');
const moment = require('moment');
const pkg = require('../package.json');

const git = new GitRevisionPlugin({ lightweightTags: true });
const cfg = webpackCfg('settings/*.js');

module.exports = cfg.setConfig(lib => {
  moment.locale();

  // ~ metadata ~
  lib.set('package', pkg);
  lib.set('context', process.cwd());
  lib.set('cwd', process.cwd());
  lib.set('pwd', alias(__dirname));
  lib.set('now', moment().format('LLLL'));
  lib.set('git.commithash', git.commithash());
  lib.set('git.version', git.version());
  lib.set('lifecycle', process.env.npm_lifecycle_event);

  // ~ structure folders ~
  lib.set('path.test', 'test');
  lib.set('path.source', 'source');

  // ~ entry ~
  lib.set('path.entry.script', '');

  // ~ output ~
  lib.set('path.output.bundle', 'dist');
  lib.set('path.output.script', '');

  // ~ dev lifecycle ~
  lib.set('dev.env.NODE_ENV', '"development"');
  lib.set('dev.sourceMap', '#cheap-module-eval-source-map');
  lib.set('dev.assetsPublicPath', '/');
  lib.set('dev.view.entry', './dev-cycle.pug');
  lib.set('dev.entry.test', './dev-cycle.js');
  lib.set('dev.server.contentBase', '/');
  lib.set('dev.server.compress', true);
  lib.set('dev.server.stats', 'errors-only');
  lib.set('dev.server.host', 'localhost');
  lib.set('dev.server.port', 3000);
  lib.set('dev.server.open', true);

  // ~ test lifecycle ~
  lib.set('test.env.NODE_ENV', '"testing"');
  lib.set('test.sourceMap', '#inline-source-map');

  // ~ build lifecycle ~
  lib.set('build.env.NODE_ENV', '"production"');
  lib.set('build.sourceMap', '#source-map');
  lib.set('build.assetsPublicPath', '/');
  lib.set('build.gzip', true);
  lib.set('build.gzip.extensions', ['js']);
  lib.set('build.bundleAnalyzer.report', process.env.npm_config_report);

  // ~ entry point ~
  lib.set(`script.entry[${pkg.name}.memory]`, './memory.js');
  lib.set(`script.entry[${pkg.name}.query]`, './query.js');
  lib.set(`script.entry[${pkg.name}.hash]`, './hash.js');
  lib.set(`script.entry[${pkg.name}.state]`, './state.js');
  lib.set(`script.entry.${pkg.name}`, './index.js');
});
