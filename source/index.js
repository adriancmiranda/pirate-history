'use strict';

var pirate = {};
var ua = navigator.userAgent;

function shouldEmitPopStateEvent(event) {
	var isChromeIOS = ua.indexOf('CriOS') > -1;
	return event.state || isChromeIOS;
}

function emitCallbackEvent(callback, event) {
	Object.defineProperty(event, 'currentTarget', {
		get: function getCurrentTarget() {
			return pirate;
		}
	});
	if (typeof callback === 'function') {
		callback.call(pirate, event);
	}
}

function emitPopStateEvent(callback, state) {
	emitCallbackEvent(callback, state);
}

function onPopState(callback, event) {
	if (shouldEmitPopStateEvent(event)) {
		emitPopStateEvent(callback, event);
	}
}

function onHashChange(callback) {
	emitPopStateEvent(callback, pirate);
}

Object.defineProperty(pirate, 'onhashchange', {
	set: function setOnHashChange(run) {
		window.onhashchange = onHashChange.bind(pirate, run);
	},
	get: function getOnHashChange() {
		return window.onhashchange;
	}
});

Object.defineProperty(pirate, 'onpopstate', {
	set: function setOnPopState(run) {
		window.onpopstate = onPopState.bind(pirate, run);
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
	get: function getState() {
		var pirateState = {};
		try {
			return window.history.state || pirateState;
		} catch (err) { return pirateState; }
	}
});

Object.defineProperty(pirate, 'hasStateList', {
	get: function hasStateList() {
		return /Chrome|Windows\sPhone/.test(ua) &&
		!/Mobile\sSafari|Android\s(2\..+|4\.0)/g.test(ua) &&
		window.history && 'pushState' in window.history;
	}
});

pirate.addEventListener = function addEventListener(event, listener, options) {
	return window.addEventListener(event, listener, options);
};

pirate.removeEventListener = function removeEventListener(event, listener, options) {
	return window.removeEventListener(event, listener, options);
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

module.exports = pirate;
