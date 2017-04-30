/*!
 * this script is just for test purposes.
 */
export default class UI {
	constructor(selector) {
		this.container = document.querySelector(selector);
	}

	createElement(tagName, options) {
		const element = document.createElement(tagName);
		Object.keys(options || {}).forEach((key) => {
			const attr = options[key];
			if (attr === Object(attr) && typeof attr !== 'function') {
				Object.keys(attr).forEach((prop) => {
					if (attr[prop] === Object(attr[prop])) {
						element[key][prop] = JSON.stringify(attr[prop], null, 0);
					} else {
						element[key][prop] = attr[prop];
					}
				});
			} else {
				element[key] = attr;
			}
		}, this);
		return element;
	}

	createInput(options) {
		return this.createElement('input', Object.assign({}, options));
	}

	createTextArea(options) {
		return this.createInput(Object.assign({}, options, {
			type: 'textarea',
		}));
	}

	createButton(options) {
		return this.createInput(Object.assign({}, options, {
			type: 'button',
		}));
	}

	prepend(ui) {
		this.container.prepend(ui);
		return ui;
	}

	append(ui) {
		this.container.append(ui);
		return ui;
	}
}
