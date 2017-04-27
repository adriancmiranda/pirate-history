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
		files: [{
			pattern: './fixtures/**/*.fixture.*',
			watched: true,
		}, {
			pattern: './specs/**/*.spec.js',
			watched: true,
		}, {
			pattern: '../source/**/*.js',
			watched: true,
		}],
		preprocessors: {
			'../source/**/*.js': ['webpack', 'sourcemap'],
			'./specs/**/*.spec.js': ['webpack', 'sourcemap'],
			'./fixtures/**/*.html': ['html2js'],
			'./fixtures/**/*.json': ['json_fixtures'],
		},
		jsonFixturesPreprocessor: {
			variableName: '__json__',
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
			],
		},
	});
};
