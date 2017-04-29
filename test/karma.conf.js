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
		bs_safari_mac: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'Sierra',
			browser: 'safari',
			browser_version: '9.0',
		},
		bs_firefox_mac: {
			base: 'BrowserStack',
			os: 'OS X',
			os_version: 'Sierra',
			browser: 'firefox',
			browser_version: '21.0',
		},
		bs_firefox_win: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'firefox',
			browser_version: '43.0',
		},
		bs_chrome_mac: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: 'Sierra',
			browser: 'chrome',
			browser_version: '47.0',
			flags: ['--no-sandbox'],
		},
		bs_chrome_win: {
			base: 'BrowserStack',
			os: 'Windows',
			os_version: '10',
			browser: 'chrome',
			browser_version: '47.0',
			flags: ['--no-sandbox'],
		},
	};

	const settings = {
		customLaunchers,
		logLevel: config.LOG_INFO,
		basePath: '../',
		port: 9876,
		colors: true,
		autoWatch: false,
		singleRun: false,
		concurrency: 2,
		captureTimeout: 240000,
		browserNoActivityTimeout: 240000,
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 3,
		browsers: ['PhantomJS'],
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
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true,
		},
		browserStack: {
			project: pkg.name,
			username: process.env.BROWSERSTACK_USERNAME,
			accessKey: process.env.BROWSERSTACK_KEY,
		},
		client: {
			mocha: {
				reporter: 'html',
			},
		},
		coverageReporter: {
			dir: 'test/coverage',
			reporters: [
				{ type: 'lcov', subdir: '.' },
				{ type: 'text-summary' },
			],
		},
	};

	if (process.env.TRAVIS) {
		settings.browserStack.browsers = Object.keys(customLaunchers);
		settings.browserStack.build = process.env.TRAVIS_BUILD_NUMBER;
		settings.browserStack.name = process.env.TRAVIS_JOB_NUMBER;
	} else if (process.env.APPVEYOR) {
		settings.browserStack.browsers = Object.keys(customLaunchers);
		settings.browserStack.build = process.env.APPVEYOR_BUILD_NUMBER;
		settings.browserStack.name = process.env.APPVEYOR_JOB_NUMBER;
	}

	config.set(settings);
};
