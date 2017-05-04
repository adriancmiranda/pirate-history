import * as dispatcher from './browser/events';

const pirate = {};
const ua = navigator.userAgent;
const HashChangeEvent = 'hashchange';
const HashChangeHook = `on${HashChangeEvent}`;
const PopStateEvent = 'popstate';
const PopStateHook = `on${PopStateEvent}`;
const ReplaceStateEvent = 'replacestate';
const ChangeStateEvent = 'changestate';
const PushStateEvent = 'pushstate';

function shouldEmitPopStateEvent(event) {
	const isChromeFromIOS = ua.indexOf('CriOS') > -1;
	const hasState = typeof event.state !== 'undefined';
	return hasState || isChromeFromIOS;
}

function emitCallbackEvent(callback, event) {
	Object.defineProperty(event, 'currentTarget', {
		get: function getCurrentTarget() {
			return pirate;
		},
	});
	if (typeof callback === 'function') {
		callback.call(pirate, event);
	}
}

function emitPopStateEvent(callback, state) {
	emitCallbackEvent(callback, state);
	pirate.emit(ChangeStateEvent, state);
}

function onPopState(callback) {
	return function onpopstate(event) {
		if (shouldEmitPopStateEvent(event)) {
			emitPopStateEvent(callback, event);
		}
	};
}

function onHashChange(callback) {
	return function onhashchange() {
		emitPopStateEvent(callback, pirate);
	};
}

Object.defineProperty(pirate, HashChangeHook, {
	set: function setOnHashChange(val) {
		if (!val) pirate.off(HashChangeEvent);
		pirate.on(HashChangeEvent, onHashChange(val));
	},
	get: function getOnHashChange() {
		return window[HashChangeHook];
	},
});

Object.defineProperty(pirate, PopStateHook, {
	set: function setOnPopState(val) {
		if (!val) pirate.off(PopStateEvent);
		pirate.on(PopStateEvent, onPopState(val));
	},
	get: function getOnPopState() {
		return window[PopStateHook];
	},
});

Object.defineProperty(pirate, 'length', {
	set: function setLength(val) {
		window.history.length = val;
	},
	get: function getLength() {
		return window.history.length;
	},
});

Object.defineProperty(pirate, 'state', {
	get: function getState() {
		const pirateState = {};
		try {
			return window.history.state || pirateState;
		} catch (err) { return pirateState; }
	},
});

Object.defineProperty(pirate, 'hasStateList', {
	get: function hasStateList() {
		return /Chrome|Windows\sPhone/.test(ua) &&
		!/Mobile\sSafari|Android\s(2\..+|4\.0)/g.test(ua) &&
		window.history && 'pushState' in window.history;
	},
});

Object.defineProperty(pirate, 'HashChangeEvent', {
	get: function getHashChangeEvent() {
		return HashChangeEvent;
	},
});

Object.defineProperty(pirate, 'HashChangeHook', {
	get: function getHashChangeHook() {
		return HashChangeHook;
	},
});

Object.defineProperty(pirate, 'PopStateEvent', {
	get: function getPopStateEvent() {
		return PopStateEvent;
	},
});

Object.defineProperty(pirate, 'PopStateHook', {
	get: function getPopStateHook() {
		return PopStateHook;
	},
});

Object.defineProperty(pirate, 'ReplaceStateEvent', {
	get: function getPopStateHook() {
		return ReplaceStateEvent;
	},
});

Object.defineProperty(pirate, 'ChangeStateEvent', {
	get: function getPopStateHook() {
		return ChangeStateEvent;
	},
});

Object.defineProperty(pirate, 'PushStateEvent', {
	get: function getPopStateHook() {
		return PushStateEvent;
	},
});

pirate.on = function on(type, listener, options) {
	dispatcher.on(window, type, listener, options);
};

pirate.one = function one(type, listener, options) {
	return dispatcher.one(window, type, listener, options);
};

pirate.off = function off(type, listener, options) {
	dispatcher.off(window, event.type, event.listener, options);
};

pirate.emit = function emit(type, state) {
	return dispatcher.emit(window, type, { bubbles: true, cancelable: true, detail: { state } });
};

pirate.willEmit = function willEmit(type) {
	return dispatcher.willEmit(type);
};

pirate.pushState = function pushState(state, title, url) {
	const response = window.history.pushState(state, title, url);
	pirate.emit(PushStateEvent, state);
	pirate.emit(ChangeStateEvent, state);
	return response;
};

pirate.replaceState = function replaceState(state, title, url) {
	const response = window.history.replaceState(state, title, url);
	pirate.emit(ReplaceStateEvent, state);
	pirate.emit(ChangeStateEvent, state);
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

export default pirate;
