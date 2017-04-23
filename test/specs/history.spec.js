/* eslint-disable func-names */
const expect = require('chai').expect;
const pirateHistory = require('../../');

describe('correct-history', function () {
	var lib;
	before(function () {
		lib = pirateHistory();
	});
	it('should pass', function () {
		expect(pirateHistory).to.be.instanceOf(Function);
		expect(lib).to.be.a('string');
	});
});
