const chai = require('chai');
const pirate = require('../../');

const expect = chai.expect;
// const assert = chai.assert;

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
		fixture.setBase('test/fixtures');
	});

	beforeEach(function () {
		this.ui = fixture.load('history.fixture.html');
		UI.render(fixture.el.innerHTML);
	});

	afterEach(function () {
		fixture.cleanup();
	});

	it('should pass', function () {
		expect(pirate).to.be.instanceOf(Object);
	});
});
