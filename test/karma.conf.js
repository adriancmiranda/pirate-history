const bin = require('../bin');
const pkg = bin.common.res('package');
const webpack = bin({ run: 'test' });

/*!
|* This is a karma config file. For more details
|* @see https://www.browserstack.com/screenshots
|* @see https://www.browserstack.com/list-of-browsers-and-platforms?product=automate
|* @see https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
|* @see http://karma-runner.github.io/0.13/config/configuration-file.html
|* @see http://karma-runner.github.io/0.13/config/browsers.html
|* @see https://github.com/webpack/karma-webpack
`*/
module.exports = (config) => {
	const customLaunchers = {
		bs_mobile_chrome: {
			base: 'BrowserStack',
			os: 'ios',
			os_version: '9.3',
			browser: 'chrome',
			browser_version: '5.5.372',
			real_mobile: false,
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
		bs_win_chrome: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'chrome',
			browser_version: '47.0',
			flags: ['--no-sandbox'],
		},
		bs_win_firefox: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'firefox',
			browser_version: '43.0',
		},
		bs_win_ie8: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '7',
			browser: 'IE',
			browser_version: '8.0',
		},
		bs_win_ie9: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '7',
			browser: 'IE',
			browser_version: '9.0',
		},
		bs_win_ie10: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '7',
			browser: 'IE',
			browser_version: '10.0',
		},
		bs_win_ie11: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '7',
			browser: 'IE',
			browser_version: '11.0',
		},
		bs_win_edge: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'Edge',
			browser_version: '14.0',
		},
		bs_mac_chrome: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'Sierra',
			browser: 'chrome',
			browser_version: '47.0',
			flags: ['--no-sandbox'],
		},
		bs_mac_firefox: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'Sierra',
			browser: 'firefox',
			browser_version: '21.0',
		},
		bs_mac_safari: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'Sierra',
			browser: 'safari',
			browser_version: '9.0',
		},
	};

	const settings = {
		webpack,
		customLaunchers,
		logLevel: config.LOG_INFO,
		basePath: '../',
		port: 9876,
		colors: true,
		browsers: ['Chrome'],
		frameworks: ['mocha', 'sinon-chai', 'fixture', 'phantomjs-shim'],
		reporters: ['spec', 'coverage'],
		files: [{
			pattern: 'test/fixtures/**/*.fixture.*',
			watched: true,
		}, {
			pattern: 'test/specs/**/*.spec.js',
			watched: true,
		}, {
			pattern: 'source/**/*.js',
			watched: true,
		}],
		preprocessors: {
			'source/**/*.js': ['webpack', 'sourcemap', 'coverage'],
			'test/specs/**/*.spec.js': ['webpack', 'sourcemap'],
			'test/fixtures/**/*.html': ['html2js'],
			'test/fixtures/**/*.json': ['json_fixtures'],
		},
		jsonFixturesPreprocessor: {
			variableName: '__json__',
		},
		webpackServer: {
			noInfo: true,
		},
		browserStack: {
			project: pkg.name,
			username: process.env.BROWSERSTACK_USERNAME,
			accessKey: process.env.BROWSERSTACK_KEY,
			captureTimeout: 120,
			retryLimit: 3,
			timeout: 300,
		},
		client: {
			mocha: {
				reporter: 'html',
			},
		},
		coverageReporter: {
			dir: 'test/coverage',
			reporters: [
				{ type: 'lcovonly', subdir: '.' },
				{ type: 'json', subdir: '.' },
			],
		},
	};

	if (process.env.TRAVIS || process.env.APPVEYOR || process.env.CIRCLECI) {
		settings.browsers = Object.keys(customLaunchers);
		settings.reporters = ['dots'];
		settings.singleRun = true;
		settings.concurrency = 2;
		settings.browserDisconnectTimeout = 10000;
		settings.browserDisconnectTolerance = 3;
		if (process.env.TRAVIS) {
			settings.browserStack.build = process.env.TRAVIS_BUILD_NUMBER;
			settings.browserStack.name = process.env.TRAVIS_JOB_NUMBER;
		} else if (process.env.APPVEYOR) {
			settings.browserStack.build = process.env.APPVEYOR_BUILD_NUMBER;
			settings.browserStack.name = process.env.APPVEYOR_JOB_NUMBER;
		} else if (process.env.CIRCLECI) {
			settings.browserStack.build = process.env.CIRCLE_BUILD_NUM;
			settings.browserStack.name = process.env.CIRCLE_BUILD_URL;
		}
	}

	config.set(settings);
};
