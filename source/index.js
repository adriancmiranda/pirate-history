'use strict';

var pirate = {};
var ua = navigator.userAgent;
var HashChangeEvent = 'hashchange';
var HashChangeHook = 'on' + HashChangeEvent;
var PopStateEvent = 'popstate';
var PopStateHook = 'on' + PopStateEvent;

function shouldEmitPopStateEvent(event) {
	var isChromeFromIOS = ua.indexOf('CriOS') > -1;
	var hasState = typeof event.state === 'undefined';
	return hasState || isChromeFromIOS;
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

Object.defineProperty(pirate, HashChangeHook, {
	set: function setOnHashChange(run) {
		window[HashChangeHook] = onHashChange.bind(pirate, run);
	},
	get: function getOnHashChange() {
		return window[HashChangeHook];
	}
});

Object.defineProperty(pirate, PopStateHook, {
	set: function setOnPopState(run) {
		window[PopStateHook] = onPopState.bind(pirate, run);
	},
	get: function getOnPopState() {
		return window[PopStateHook];
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

Object.defineProperty(pirate, 'HashChangeEvent', {
	get: function getHashChangeEvent() {
		return HashChangeEvent;
	}
});

Object.defineProperty(pirate, 'HashChangeHook', {
	get: function getHashChangeHook() {
		return HashChangeHook;
	}
});

Object.defineProperty(pirate, 'PopStateEvent', {
	get: function getPopStateEvent() {
		return PopStateEvent;
	}
});

Object.defineProperty(pirate, 'PopStateHook', {
	get: function getPopStateHook() {
		return PopStateHook;
	}
});

pirate.addEventListener = function addEventListener(event, listener, options) {
	return window.addEventListener(event, listener, options);
};
pirate.on = pirate.addEventListener;

pirate.removeEventListener = function removeEventListener(event, listener, options) {
	return window.removeEventListener(event, listener, options);
};
pirate.off = pirate.removeEventListener;

pirate.dispatchEvent = function dispatchEvent(event) {
	return window.dispatchEvent(event);
};
pirate.trigger = pirate.dispatchEvent;

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
