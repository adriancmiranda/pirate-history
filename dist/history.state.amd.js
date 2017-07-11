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
define(['exports'], function (exports) { 'use strict';

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

	function escapeRegExp(rule) {
	  return String(rule).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	function parse$1(query) {
		var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
		var eq = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '=';

		var searchParams = {};
		var rule = '([^?' + eq + sep + ']+)(' + escapeRegExp(eq) + '([^' + sep + ']*))?';
		var pattern = new RegExp(rule, 'g');
		String(query).replace(pattern, function ($0, $1, $2, $3) {
			searchParams[$1] = $3;
		});
		return searchParams;
	}

	function toInt(value) {
	  return 0 | parseInt(value, 10);
	}

	function is(expected, value) {
	  return new RegExp("(" + expected + ")").test(toString.call(value));
	}

	function isAbsolute(path) {
		if (is('String', path)) {
			var len = path.length;
			if (len === 0) return false;
			var code = path.charCodeAt(0);
			if (code === 47 || code === 92) {
					return true;
				} else if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
				if (len > 2 && path.charCodeAt(1) === 58) {
						code = path.charCodeAt(2);
						if (code === 47 || code === 92) {
								return true;
							}
					}
			}
		}
		return false;
	}

	var $a = document.createElement('a');

	function normalize(href, baseUrlObject) {
		if (isAbsolute(Object(baseUrlObject).href)) {
			href = baseUrlObject.href + '/' + href;
		}
		if (document.documentMode) {
			$a.setAttribute('href', href);
			return $a.href;
		}
		return href;
	}

	var DEFAULT_PORTS = { http: 80, https: 443, ftp: 21, gopher: 70 };

	function parse(href, baseUrlObject) {
		var defaultPorts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PORTS;

		var info = {};
		if (is('Function', href)) {
			href = href(baseUrlObject, defaultPorts);
		}
		if (is('URL', href) && href.href) {
			return parse(href.href);
		}
		if (!is('String', href)) {
			var base = document.getElementsByTagName('base')[0];
			href = base && base.getAttribute('href') || window.location.href;
		}
		$a.setAttribute('href', normalize(href, baseUrlObject));
		info.pathname = $a.pathname.charAt(0) === '/' ? $a.pathname : '/' + $a.pathname;
		info.protocol = $a.protocol ? $a.protocol.replace(/:$/, '') : '';
		info.search = $a.search ? $a.search.replace(/^\?/, '') : '';
		info.searchParams = parse$1(info.search);
		info.hash = $a.hash ? $a.hash.replace(/^#!?/, '') : '';
		info.port = toInt($a.port) || defaultPorts[info.protocol] || null;
		info.username = $a.username || undefined;
		info.password = $a.password || undefined;
		info.hostname = $a.hostname;
		info.origin = $a.origin;
		info.host = $a.host;
		info.href = $a.href;
		return info;
	}

	var HashChangeEvent = 'hashchange';
	var HashChangeHook = 'on' + HashChangeEvent;
	var PopStateEvent = 'popstate';
	var PopStateHook = 'on' + PopStateEvent;
	var ReplaceStateEvent = 'replacestate';
	var ChangeStateEvent = 'changestate';
	var PushStateEvent = 'pushstate';

	var ua = window.navigator.userAgent;

	var native = window.history;

	var hasStateList = 'pushState' in Object(native) && !/Android\s(2\..+|4\.0)|Mobile\sSafari/gi.test(ua) && /Windows\sPhone|Chrome/gi.test(ua);

	function updateStateList(URL, put) {
	  put(parse(URL));
	}

	function pushState(state, title, URL) {
	  return updateStateList(URL, function () {
	    native.pushState(state, title, URL);
	    dispatchEvent(window, PushStateEvent, { state: state, title: title, URL: URL });
	    dispatchEvent(window, ChangeStateEvent, { state: state, title: title, URL: URL });
	  });
	}

	function replaceState(state, title, URL) {
	  return updateStateList(URL, function () {
	    native.replaceState(state, title, URL);
	    dispatchEvent(window, ReplaceStateEvent, { state: state, title: title, URL: URL });
	    dispatchEvent(window, ChangeStateEvent, { state: state, title: title, URL: URL });
	  });
	}

	function go(factor) {
	  return native.go(factor);
	}

	function forward() {
	  return native.forward();
	}

	function back() {
	  return native.back();
	}

	function length() {
	  return toInt(native.length);
	}

	function $state() {
	  var info = {};
	  try {
	    return native.state || info;
	  } catch (err) {
	    return info;
	  }
	}

	function $title(val) {
	  if (is('Function', val)) {
	    val = val(document.title);
	  }
	  if (is('String', val)) {
	    document.title = val;
	  }
	  return document.title;
	}

	function location(val) {
	  if (val) return parse(val);
	  return parse(window.location.href);
	}

var state = Object.freeze({
		HashChangeEvent: HashChangeEvent,
		HashChangeHook: HashChangeHook,
		PopStateEvent: PopStateEvent,
		PopStateHook: PopStateHook,
		ReplaceStateEvent: ReplaceStateEvent,
		ChangeStateEvent: ChangeStateEvent,
		PushStateEvent: PushStateEvent,
		native: native,
		hasStateList: hasStateList,
		pushState: pushState,
		replaceState: replaceState,
		go: go,
		forward: forward,
		back: back,
		length: length,
		$state: $state,
		$title: $title,
		location: location
	});

	exports.state = state;

	Object.defineProperty(exports, '__esModule', { value: true });

});
