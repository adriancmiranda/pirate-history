/*!
 * this script is just for test purposes.
 */
/* eslint-disable */
function UI(selector) {
	this.container = document.querySelector(selector);
}

UI.prototype = {
	createElement: function (tagName, options) {
		var el = document.createElement(tagName);
		Object.keys(options || {}).forEach(function (key) {
			var attr = options[key];
			if (attr === Object(attr) && typeof attr !== 'function') {
				return Object.keys(attr).forEach(function (prop) {
					if (attr[prop] === Object(attr[prop])) {
						el[key][prop] = JSON.stringify(attr[prop], null, 0);
					} else {
						el[key][prop] = attr[prop];
					}
				});
			}
			el[key] = attr;
		}, this);
		return el;
	},

	createInput: function (options) {
		return this.createElement('input', Object.assign({}, options));
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
