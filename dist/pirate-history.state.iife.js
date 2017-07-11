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
 * @moment Sunday, July 9, 2017 2:39 PM
 * @commit f9130cfbdf21a74d0b1ace84d64494397afce0de
 * @homepage https://github.com/adriancmiranda/pirate-history
 * @author Adrian C. Miranda */
this['pirate-history'] = this['pirate-history'] || {};
this['pirate-history'].state = (function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	});

	var _aFunction = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function(fn, that, length){
	  _aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function(it){
	  if(!_isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

	var document$1 = _global.document;
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function(it){
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function(){
	  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function(it, S){
	  if(!_isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP             = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if(_ie8DomDefine)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

	var _hide = _descriptors ? function(object, key, value){
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

	var PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? _core : _core[name] || (_core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])_hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	var _export = $export;

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

	var toString$1 = {}.toString;

	var _cof = function(it){
	  return toString$1.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings

	var _toIobject = function(it){
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil  = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength
	var min       = Math.min;
	var _toLength = function(it){
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max       = Math.max;
	var min$1       = Math.min;
	var _toIndex = function(index, length){
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes

	var _arrayIncludes = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = _toIobject($this)
	      , length = _toLength(O.length)
	      , index  = _toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var SHARED = '__core-js_shared__';
	var store  = _global[SHARED] || (_global[SHARED] = {});
	var _shared = function(key){
	  return store[key] || (store[key] = {});
	};

	var id = 0;
	var px = Math.random();
	var _uid = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');
	var _sharedKey = function(key){
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO     = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function(object, names){
	  var O      = _toIobject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)_has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(_has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)


	var _objectKeys = Object.keys || function keys(O){
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$1 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$1
	};

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function(it){
	  return Object(_defined(it));
	};

	// 19.1.2.1 Object.assign(target, source, ...)
	var $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = _toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = _objectGops.f
	    , isEnum     = _objectPie.f;
	  while(aLen > index){
	    var S      = _iobject(arguments[index++])
	      , keys   = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', {assign: _objectAssign});

	var assign$1 = _core.Object.assign;

	var assign = createCommonjsModule(function (module) {
	module.exports = { "default": assign$1, __esModule: true };
	});

	var _Object$assign = unwrapExports(assign);

	function createEvent(type, options) {
	  var event = { type: type };
	  var opts = _Object$assign({ bubbles: false, cancelable: false }, options);
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
	  return _Object$assign(event, opts);
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

	function is$1(expected, value) {
	  return new RegExp("(" + expected + ")").test(toString.call(value));
	}

	function isAbsolute(path) {
		if (is$1('String', path)) {
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
		if (is$1('Function', href)) {
			href = href(baseUrlObject, defaultPorts);
		}
		if (is$1('URL', href) && href.href) {
			return parse(href.href);
		}
		if (!is$1('String', href)) {
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
	  if (is$1('Function', val)) {
	    val = val(document.title);
	  }
	  if (is$1('String', val)) {
	    document.title = val;
	  }
	  return document.title;
	}

	function location(val) {
	  if (val) return parse(val);
	  return parse(window.location.href);
	}

var state$1 = Object.freeze({
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

	return state$1;

}());
