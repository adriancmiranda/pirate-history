/* eslint-disable */
'use strict';
const pirate = {};
const events = [];
const ua = navigator.userAgent;
const HashChangeEvent = 'hashchange';
const HashChangeHook = 'on' + HashChangeEvent;
const PopStateEvent = 'popstate';
const PopStateHook = 'on' + PopStateEvent;
const ReplaceStateEvent = 'replacestate';
const ChangeStateEvent = 'changestate';
const PushStateEvent = 'pushstate';

function shouldEmitPopStateEvent(event) {
	var isChromeFromIOS = ua.indexOf('CriOS') > -1;
	var hasState = typeof event.state !== 'undefined';
	return hasState || isChromeFromIOS;
}

function emitCallbackEvent(callback, event) {
	Object.defineProperty(event, 'currentTarget', {
		get: function getCurrentTarget() {
			return pirate;
		}
	});
	pirate.dispatchEvent(ChangeStateEvent, state);
	if (typeof callback === 'function') {
		callback.call(pirate, event);
	}
}

function emitPopStateEvent(callback, state) {
	emitCallbackEvent(callback, state);
}

function onPopState(callback) {
	return function onpopstate(event) {
		if (shouldEmitPopStateEvent(event)) {
			emitPopStateEvent(callback, event);
		}
	}
}

function onHashChange(callback) {
	return function onhashchange() {
		emitPopStateEvent(callback, pirate);
	};
}

Object.defineProperty(pirate, HashChangeHook, {
	set: function setOnHashChange(val) {
		if (!val) pirate.removeEventListener(HashChangeEvent);
		pirate.addEventListener(HashChangeEvent, onHashChange(val));
	},
	get: function getOnHashChange() {
		return window[HashChangeHook];
	}
});

Object.defineProperty(pirate, PopStateHook, {
	set: function setOnPopState(val) {
		if (!val) pirate.removeEventListener(PopStateEvent);
		pirate.addEventListener(PopStateEvent, onPopState(val));
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

pirate.addEventListener = function addEventListener(type, listener, options) {
	for (var id = 0; id < events.length; id += 1) {
		if (events[id].type === type && events[id].listener === listener) {
			return;
		}
	}
	events.push({ type: type, listener: listener });
	window.addEventListener(type, listener, options);
};

pirate.removeEventListener = function removeEventListener(type, listener, options) {
	for (var id = 0, event; id < events.length; id += 1) {
		var opts = arguments.length;
		var hasSameType = opts > 0 && events[id].type === type;
		var isSameEvent = opts > 1 && events[id].listener === listener && hasSameType;
		if (!opts || hasSameType || isSameEvent) {
			event = events.splice(id, 1)[0];
			window.removeEventListener(event.type, event.listener, options);
		}
	}
};

pirate.dispatchEvent = function dispatchEvent(event) {
	return window.dispatchEvent(event);
};

pirate.pushState = function pushState(state, title, url) {
	var response = window.history.pushState(state, title, url);
	pirate.dispatchEvent(PushStateEvent, state);
	pirate.dispatchEvent(ChangeStateEvent, state);
	return response;
};

pirate.replaceState = function replaceState(state, title, url) {
	var response = window.history.replaceState(state, title, url);
	pirate.dispatchEvent(ReplaceStateEvent, state);
	pirate.dispatchEvent(ChangeStateEvent, state);
	return response;
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

pirate.on = pirate.addEventListener;
pirate.off = pirate.removeEventListener;
pirate.trigger = pirate.dispatchEvent;

export default pirate;
