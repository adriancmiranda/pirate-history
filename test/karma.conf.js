const webpackConfig = require('../bin');

/*!
|* This is a karma config file. For more details
|* @see http://karma-runner.github.io/0.13/config/configuration-file.html
|* @see http://karma-runner.github.io/0.13/config/browsers.html
|* @see https://github.com/webpack/karma-webpack
`*/
module.exports = (config) => {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['mocha', 'sinon-chai', 'fixture', 'phantomjs-shim'],
		reporters: ['spec', 'coverage'],
		files: ['./index.js'],
		preprocessors: {
			'./index.js': ['webpack', 'sourcemap'],
			'./**/*.html': ['html2js'],
		},
		webpack: webpackConfig({ run: 'test' }),
		webpackMiddleware: {
			noInfo: true,
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'lcov', subdir: '.' },
				{ type: 'text-summary' },
			]
		},
	});
};
