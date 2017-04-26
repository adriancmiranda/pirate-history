/* eslint-disable func-names */
const chai = require('chai');
const pirateHistory = require('../../');

const expect = chai.expect;
const assert = chai.assert;
describe('correct-history', function () {
	var lib;
	before(function () {
		lib = pirateHistory();
	});

	beforeEach(function () {
	});

	it('should pass', function () {
		expect(pirateHistory).to.be.instanceOf(Function);
		expect(lib).to.be.a('string');
		assert.equal(lib, '☠  There\'s nothing for you here yet ☠');
	});
});
