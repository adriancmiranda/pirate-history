/* eslint-disable func-names */
const chai = require('chai');
const pirateHistory = require('../../');

const expect = chai.expect;
const assert = chai.assert;
describe('correct-history', function () {
	const UI = {
		render: function (html) {
			document.body.insertAdjacentHTML('afterbegin', html);
		},
		get root() {
			return document.querySelector('#history');
		},
		get links() {
			return this.root.querySelectorAll('button');
		}
	};

	before(function () {
		fixture.setBase('fixtures');
		this.lib = pirateHistory();
	});

	beforeEach(function () {
		this.ui = fixture.load('history.fixture.html');
		UI.render(fixture.el.innerHTML);
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
