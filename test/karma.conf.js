const bin = require('../bin');
const pkg = bin.common.res('package');
const webpackConfig = bin({ run: 'test' });

/*!
|* This is a karma config file. For more details
|* @see http://karma-runner.github.io/0.13/config/configuration-file.html
|* @see http://karma-runner.github.io/0.13/config/browsers.html
|* @see https://github.com/webpack/karma-webpack
`*/
module.exports = (config) => {
	const customLaunchers = {
		bs_ie9: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: 'XP',
			browser: 'ie',
			browser_version: '9.0',
		},
		bs_ie10: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '8',
			browser: 'ie',
			browser_version: '10.0',
		},
		bs_ie11: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'ie',
			browser_version: '11.0',
		},
		bs_mobile_safari_8: {
			base: 'BrowserStack',
			os: 'ios',
			os_version: '8.3',
			browser: 'iphone',
			real_mobile: false,
		},
		bs_mobile_safari_9: {
			base: 'BrowserStack',
			os: 'ios',
			os_version: '9.1',
			browser: 'iphone',
			real_mobile: false,
		},
		bs_safari: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'El Capitan',
			browser: 'safari',
			browser_version: '9.0',
		},
		bs_firefox: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'firefox',
			browser_version: '43.0',
		},
		bs_chrome: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'chrome',
			browser_version: '47.0',
		},
	};

	config.set({
		customLaunchers,
		basePath: '',
		port: 9876,
		colors: true,
		autoWatch: false,
		singleRun: false,
		concurrency: 2,
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 3,
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
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true,
		},
		browserStack: {
			project: pkg.name,
			username: process.env.BROWSERSTACK_USERNAME,
			accessKey: process.env.BROWSERSTACK_KEY,
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'lcov', subdir: '.' },
				{ type: 'text-summary' },
			],
		},
	});

	if (process.env.TRAVIS || process.env.APPVEYOR) {
		config.browserStack.browsers = Object.keys(customLaunchers);
		config.browserStack.build = process.env.TRAVIS_BUILD_NUMBER;
		config.browserStack.name = process.env.TRAVIS_JOB_NUMBER;
	}
};
