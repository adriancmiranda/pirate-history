'use strict';

function pirate() {
	return '☠  There\'s nothing for you here yet ☠';
}

Object.defineProperty(pirate, 'onhashchange', {
	set: function setOnHashChange(run) {
		window.onhashchange = function onHashChange(event) {
			Object.defineProperty(event, 'currentTarget', {
				configurable: true,
				get: function getCurrentTarget() {
					return pirate;
				}
			});
			run(event);
		};
	},
	get: function getOnHashChange() {
		return window.onhashchange;
	}
});

Object.defineProperty(pirate, 'onpopstate', {
	set: function setOnPopState(run) {
		window.onpopstate = function onPopState(event) {
			Object.defineProperty(event, 'currentTarget', {
				configurable: true,
				get: function getCurrentTarget() {
					return pirate;
				}
			});
			run(event);
		};
	},
	get: function getOnPopState() {
		return window.onpopstate;
	}
});

Object.defineProperty(pirate, 'length', {
	set: function setLength(val) {
		window.history.length = val;
	},
	get: function getLength() {
		return window.history.length;
	}
});

Object.defineProperty(pirate, 'state', {
	set: function setState(val) {
		window.history.state = val;
	},
	get: function getState() {
		return window.history.state;
	}
});

pirate.addEventListener = function addEventListener(event, listener) {
	return window.addEventListener(event, listener, false);
};

pirate.removeEventListener = function removeEventListener(event, listener) {
	return window.removeEventListener(event, listener, false);
};

pirate.dispatchEvent = function dispatchEvent(event) {
	return window.dispatchEvent(event);
};

pirate.pushState = function pushState(state, title, url) {
	return window.history.pushState(state, title, url);
};

pirate.replaceState = function replaceState(state, title, url) {
	return window.history.replaceState(state, title, url);
};

pirate.go = function go(factor) {
	return window.history.go(factor);
};

pirate.forward = function forward() {
	return window.history.forward();
};

pirate.back = function back() {
	return window.history.back();
};

pirate.flush = function flush() {
	var moves = pirate.length - 1;
	return pirate.go(-moves);
};

module.exports = pirate;
