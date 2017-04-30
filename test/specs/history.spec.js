import { expect } from 'chai';
import pirate from '../../';

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
	});
});
