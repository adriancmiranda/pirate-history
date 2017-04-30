import { expect } from 'chai';
import pirate from 'index';

describe('correct-history', () => {
	const UI = {
		render(html) {
			document.body.insertAdjacentHTML('afterbegin', html);
		},
		get root() {
			return document.querySelector('#history');
		},
		get links() {
			return this.root.querySelectorAll('button');
		},
	};

	before(() => {
		fixture.setBase('test/fixtures');
	});

	beforeEach(() => {
		this.ui = fixture.load('history.fixture.html');
		UI.render(fixture.el.innerHTML);
	});

	afterEach(() => {
		fixture.cleanup();
	});

	it('should pass', () => {
		expect(pirate).to.be.instanceOf(Object);
		expect(pirate.pushState).to.be.instanceOf(Function);
	});
});
