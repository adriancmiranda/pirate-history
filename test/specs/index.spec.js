import pirate from '../../source/index';

describe('history', () => {
	let ui;

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

	beforeAll(() => {
		fixture.setBase('test/fixtures');
	});

	beforeEach(() => {
		ui = fixture.load('history.fixture.html');
		UI.render(fixture.el.innerHTML);
	});

	afterEach(() => {
		fixture.cleanup();
		ui = undefined;
	});

	it('should pass', () => {
		expect(pirate).toEqual(jasmine.any(Object));
		expect(pirate.pushState).toEqual(jasmine.any(Function));
		expect(ui[0].innerHTML).toEqual(jasmine.any(String));
	});
});
