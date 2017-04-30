/*!
 * this script is just for test purposes.
 */
/* eslint-disable */
function UI(selector) {
	this.container = document.querySelector(selector);
}

UI.prototype = {
	createElement: function (tagName, options) {
		var element = document.createElement(tagName);
		Object.keys(options || {}).forEach(function (key) {
			var attr = options[key];
			if (attr === Object(attr) && typeof attr !== 'function') {
				return Object.keys(attr).forEach(function (prop) {
					if (attr[prop] === Object(attr[prop])) {
						element[key][prop] = JSON.stringify(attr[prop], null, 0);
					} else {
						element[key][prop] = attr[prop];
					}
				});
			}
			element[key] = attr;
		}, this);
		return element;
	},

	createInput: function (options) {
		return this.createElement('input', Object.assign({}, options));
	},

	createTextArea: function (options) {
		return this.createInput(Object.assign({}, options, {
			type: 'textarea',
		}));
	},

	createButton: function (options) {
		return this.createInput(Object.assign({}, options, {
			type: 'button',
		}));
	},

	prepend: function (ui) {
		this.container.prepend(ui);
		return ui;
	},

	append: function (ui) {
		this.container.append(ui);
		return ui;
	},
};

module.exports = UI;
