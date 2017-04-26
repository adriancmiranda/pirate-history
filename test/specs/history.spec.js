/* eslint-disable func-names */
const chai = require('chai');
const pirateHistory = require('../../');

const expect = chai.expect;
const assert = chai.assert;
describe('correct-history', function () {
	before(function () {
		fixture.setBase('fixtures');
		this.lib = pirateHistory();
	});

	beforeEach(function () {
		this.ui = fixture.load('history.fixture.html');
		document.body.insertAdjacentHTML('afterbegin', fixture.el.innerHTML);
	});

	afterEach(function () {
		fixture.cleanup();
	});

	it('should pass', function () {
		expect(pirateHistory).to.be.instanceOf(Function);
		expect(this.lib).to.be.a('string');
		assert.equal(this.lib, '☠  There\'s nothing for you here yet ☠');
	});
});
