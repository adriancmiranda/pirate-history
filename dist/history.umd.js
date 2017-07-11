/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 *  pirate-history v0.0.1
 * 
 * @moment Tuesday, July 11, 2017 2:55 PM
 * @commit b21f0e2d91f5801ca47fed6bc87c8846d83f0091
 * @homepage https://github.com/adriancmiranda/pirate-history
 * @author Adrian C. Miranda */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.history = factory());
}(this, (function () { 'use strict';

	function is(expected, value) {
	  return new RegExp("(" + expected + ")").test(toString.call(value));
	}

	function createEvent(type, options) {
	  var event = { type: type };
	  var opts = Object.assign({ bubbles: false, cancelable: false }, options);
	  if (document.createEvent) {
	    event = document.createEvent('HTMLEvents');
	    event.initEvent(type, opts.bubbles, opts.cancelable);
	    event.detail = opts.detail;
	    return event;
	  } else if (document.createEventObject) {
	    event = document.createEventObject();
	    event.eventType = type;
	    event.type = type;
	  }
	  return Object.assign(event, opts);
	}

	function addEventListener(domEl, type, listener) {
	  if (domEl.addEventListener) {
	    for (var _len = arguments.length, options = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      options[_key - 3] = arguments[_key];
	    }

	    domEl.addEventListener.apply(domEl, [type, listener].concat(options));
	  } else if (domEl.attachEvent && window.htmlEvents['on' + type]) {
	    domEl.attachEvent('on' + type, listener);
	  } else {
	    domEl['on' + type] = listener;
	  }
	}

	function removeEventListener(domEl, type, listener) {
	  if (domEl.removeEventListener) {
	    for (var _len2 = arguments.length, options = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	      options[_key2 - 3] = arguments[_key2];
	    }

	    domEl.removeEventListener.apply(domEl, [type, listener].concat(options));
	  } else if (domEl.detachEvent && window.htmlEvents['on' + type]) {
	    domEl.detachEvent('on' + type, listener);
	  } else {
	    domEl['on' + type] = null;
	  }
	}

	function dispatchEvent(domEl, type, options) {
	  var cancelled = void 0;
	  var event = createEvent(type, options);
	  if (domEl.dispatchEvent) {
	    cancelled = domEl.dispatchEvent(event);
	  } else if (domEl.fireEvent && window.htmlEvents['on' + event.type]) {
	    cancelled = domEl.fireEvent('on' + event.type, event);
	  } else if (domEl['on' + event.type]) {
	    cancelled = domEl['on' + event.type](event);
	  }
	  return typeof cancelled === 'undefined' || cancelled;
	}

var polyfill = Object.freeze({
		createEvent: createEvent,
		addEventListener: addEventListener,
		removeEventListener: removeEventListener,
		dispatchEvent: dispatchEvent
	});

	var events = [];

	function emit(domEl, name, options) {
	  var cancelled = false;
	  var numArgs = arguments.length;
	  var types = String(name).split(' ');
	  var numTypes = types.length;
	  var domIsAnEventType = is('String', domEl);
	  for (var ix = 0; ix < numTypes; ix += 1) {
	    var type = types[ix];
	    if (numArgs <= 1 || domIsAnEventType) {
	      var dispatched = [];
	      for (var id = events.length - 1; id >= 0; id -= 1) {
	        var event = events[id];
	        var eventType = numArgs ? domEl : event.type;
	        dispatched.push(dispatchEvent(event.domEl, eventType, options));
	      }
	      return dispatched;
	    }
	    if (dispatchEvent(domEl, type, options)) {
	      cancelled = true;
	    }
	  }
	  return cancelled;
	}

	function on(domEl, name, listener) {
	  var types = String(name).split(' ');

	  for (var _len = arguments.length, options = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    options[_key - 3] = arguments[_key];
	  }

	  for (var ix = types.length - 1; ix >= 0; ix -= 1) {
	    var type = types[ix];
	    for (var iy = events.length - 1; iy >= 0; iy -= 1) {
	      var event = events[iy];
	      if (event.type === type && event.listener === listener) {
	        return;
	      }
	    }
	    addEventListener.apply(polyfill, [domEl, type, listener].concat(options));
	    events.push({ domEl: domEl, type: type, listener: listener });
	  }
	}

	function off(domEl, name, listener) {
	  for (var _len2 = arguments.length, options = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	    options[_key2 - 3] = arguments[_key2];
	  }

	  var types = String(name).split(' ');
	  var numArgs = arguments.length;
	  var domIsAnEventType = is('String', domEl);
	  for (var ix = types.length - 1; ix >= 0; ix -= 1) {
	    var type = types[ix];
	    var eventType = domIsAnEventType ? domEl : type;
	    for (var iy = events.length - 1; iy >= 0; iy -= 1) {
	      var event = events[iy];
	      var allElements = numArgs <= 1;
	      var hasSameType = numArgs > 1 && event.type === eventType;
	      var isSameEvent = numArgs > 2 && event.listener === listener && hasSameType;
	      if (allElements) {
	        event.type = domIsAnEventType ? eventType : event.type;
	        removeEventListener.apply(polyfill, [event.domEl, event.type, event.listener].concat(options));
	        events.splice(iy, 1);
	      } else if (hasSameType || isSameEvent) {
	        removeEventListener.apply(polyfill, [domEl, eventType, event.listener].concat(options));
	        events.splice(iy, 1);
	      }
	    }
	  }
	}

	function one(domEl, name, listener) {
	  for (var _len3 = arguments.length, options = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    options[_key3 - 3] = arguments[_key3];
	  }

	  on.apply(undefined, [domEl, name, function handler(event) {
	    off.apply(undefined, [domEl, name, handler].concat(options));
	    listener(event);
	  }].concat(options));
	}



	function willEmit(name) {
	  var types = String(name).split(' ');
	  for (var ix = types.length - 1; ix >= 0; ix -= 1) {
	    var type = types[ix];
	    for (var iy = events.length - 1; iy >= 0; iy -= 1) {
	      if (events[iy].type === type) {
	        return true;
	      }
	    }
	  }
	  return false;
	}

	var pirate = {};
	var ua = navigator.userAgent;
	var HashChangeEvent = 'hashchange';
	var HashChangeHook = 'on' + HashChangeEvent;
	var PopStateEvent = 'popstate';
	var PopStateHook = 'on' + PopStateEvent;
	var ReplaceStateEvent = 'replacestate';
	var ChangeStateEvent = 'changestate';
	var PushStateEvent = 'pushstate';

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
		}
	});

	Object.defineProperty(pirate, PopStateHook, {
		set: function setOnPopState(val) {
			if (!val) pirate.off(PopStateEvent);
			pirate.on(PopStateEvent, onPopState(val));
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
			} catch (err) {
				return pirateState;
			}
		}
	});

	Object.defineProperty(pirate, 'hasStateList', {
		get: function hasStateList() {
			return (/Chrome|Windows\sPhone/.test(ua) && !/Mobile\sSafari|Android\s(2\..+|4\.0)/g.test(ua) && window.history && 'pushState' in window.history
			);
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

	Object.defineProperty(pirate, 'ReplaceStateEvent', {
		get: function getPopStateHook() {
			return ReplaceStateEvent;
		}
	});

	Object.defineProperty(pirate, 'ChangeStateEvent', {
		get: function getPopStateHook() {
			return ChangeStateEvent;
		}
	});

	Object.defineProperty(pirate, 'PushStateEvent', {
		get: function getPopStateHook() {
			return PushStateEvent;
		}
	});

	pirate.on = function on$$1(type, listener, options) {
		on(window, type, listener, options);
	};

	pirate.one = function one$$1(type, listener, options) {
		return one(window, type, listener, options);
	};

	pirate.off = function off$$1(type, listener, options) {
		off(window, event.type, event.listener, options);
	};

	pirate.emit = function emit$$1(type, state) {
		return emit(window, type, { bubbles: true, cancelable: true, detail: { state: state } });
	};

	pirate.willEmit = function willEmit$$1(type) {
		return willEmit(type);
	};

	pirate.pushState = function pushState(state, title, url) {
		var response = window.history.pushState(state, title, url);
		pirate.emit(PushStateEvent, state);
		pirate.emit(ChangeStateEvent, state);
		return response;
	};

	pirate.replaceState = function replaceState(state, title, url) {
		var response = window.history.replaceState(state, title, url);
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

	return pirate;

})));
