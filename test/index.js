// Require all fixtures (files that ends with .fixture.html)
const fixturesContext = require.context('./fixtures', true, /\.fixture\.html$/);
fixturesContext.keys().forEach(fixturesContext);

// Require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// Require all source files for coverage.
// You can also change this to match only the subset of files that you want coverage for.
const srcContext = require.context('../source', true, /^\.js$/);
srcContext.keys().forEach(srcContext);
