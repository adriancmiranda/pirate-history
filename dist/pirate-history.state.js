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
 * @moment Monday, May 15, 2017 7:52 AM
 * @commit 25654720e4b4b3cf62a0d99c03dc24a7ed596e3e
 * @homepage https://github.com/adriancmiranda/pirate-history
 * @author Adrian C. Miranda
 * @license Unlicense
 */
var history =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6)
  , defined = __webpack_require__(5);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;

function is(expected, value) {
  return new RegExp("(" + expected + ")").test(toString.call(value));
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(19)
  , hide      = __webpack_require__(23)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
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
    : IS_BIND && own ? ctx(out, global)
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
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
module.exports = $export;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(24)
  , toPrimitive    = __webpack_require__(36)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createEvent"] = createEvent;
/* harmony export (immutable) */ __webpack_exports__["addEventListener"] = addEventListener;
/* harmony export (immutable) */ __webpack_exports__["removeEventListener"] = removeEventListener;
/* harmony export (immutable) */ __webpack_exports__["dispatchEvent"] = dispatchEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);


function createEvent(type, options) {
  var event = { type: type };
  var opts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ bubbles: false, cancelable: false }, options);
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
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(event, opts);
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(34)
  , toIndex   = __webpack_require__(33);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function(fn, that, length){
  aFunction(fn);
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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(30);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(1)(function(){
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(28)
  , gOPS     = __webpack_require__(26)
  , pIE      = __webpack_require__(29)
  , toObject = __webpack_require__(35)
  , IObject  = __webpack_require__(6)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(22)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(17)(false)
  , IE_PROTO     = __webpack_require__(31)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(27)
  , enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys')
  , uid    = __webpack_require__(37);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(25)});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (document.createElement('a'));

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashChangeEvent", function() { return HashChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashChangeHook", function() { return HashChangeHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopStateEvent", function() { return PopStateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopStateHook", function() { return PopStateHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceStateEvent", function() { return ReplaceStateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStateEvent", function() { return ChangeStateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushStateEvent", function() { return PushStateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "native", function() { return native; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasStateList", function() { return hasStateList; });
/* harmony export (immutable) */ __webpack_exports__["pushState"] = pushState;
/* harmony export (immutable) */ __webpack_exports__["replaceState"] = replaceState;
/* harmony export (immutable) */ __webpack_exports__["go"] = go;
/* harmony export (immutable) */ __webpack_exports__["forward"] = forward;
/* harmony export (immutable) */ __webpack_exports__["back"] = back;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_browser_events_polyfill__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_source_browser_path_parse__ = __webpack_require__(47);



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
  put(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_source_browser_path_parse__["a" /* default */])(URL));
}

function pushState(state, title, URL) {
  return updateStateList(URL, function () {
    native.pushState(state, title, URL);
    __WEBPACK_IMPORTED_MODULE_0_source_browser_events_polyfill__["dispatchEvent"](window, PushStateEvent, { state: state, title: title, URL: URL });
    __WEBPACK_IMPORTED_MODULE_0_source_browser_events_polyfill__["dispatchEvent"](window, ChangeStateEvent, { state: state, title: title, URL: URL });
  });
}

function replaceState(state, title, URL) {
  return updateStateList(URL, function () {
    native.replaceState(state, title, URL);
    __WEBPACK_IMPORTED_MODULE_0_source_browser_events_polyfill__["dispatchEvent"](window, ReplaceStateEvent, { state: state, title: title, URL: URL });
    __WEBPACK_IMPORTED_MODULE_0_source_browser_events_polyfill__["dispatchEvent"](window, ChangeStateEvent, { state: state, title: title, URL: URL });
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

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAbsolute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_common_is__ = __webpack_require__(9);




function isAbsolute(path) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_source_common_is__["a" /* default */])('String', path)) {
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

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_absolute__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor__ = __webpack_require__(39);



function normalize(href, baseUrlObject) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__is_absolute__["a" /* default */])(Object(baseUrlObject).href)) {
		href = baseUrlObject.href + '/' + href;
	}
	if (document.documentMode) {
		__WEBPACK_IMPORTED_MODULE_1__anchor__["a" /* default */].setAttribute('href', href);
		return __WEBPACK_IMPORTED_MODULE_1__anchor__["a" /* default */].href;
	}
	return href;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_browser_querystring_parse__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_source_common_to_int__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_source_common_is__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__normalize__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anchor__ = __webpack_require__(39);






var DEFAULT_PORTS = { http: 80, https: 443, ftp: 21, gopher: 70 };

function parse(href, baseUrlObject) {
	var defaultPorts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PORTS;

	var info = {};
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_source_common_is__["a" /* default */])('Function', href)) href = href(baseUrlObject, defaultPorts);
	if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_source_common_is__["a" /* default */])('String', href)) href = window.location.href;
	__WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].setAttribute('href', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__normalize__["a" /* default */])(href, baseUrlObject));
	info.pathname = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].pathname.charAt(0) === '/' ? __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].pathname : '/' + __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].pathname;
	info.protocol = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].protocol ? __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].protocol.replace(/:$/, '') : '';
	info.search = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].search ? __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].search.replace(/^\?/, '') : '';
	info.searchParams = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_source_browser_querystring_parse__["a" /* default */])(info.search);
	info.hash = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].hash ? __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].hash.replace(/^#!?/, '') : '';
	info.port = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_source_common_to_int__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].port) || defaultPorts[info.protocol] || null;
	info.password = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].password;
	info.username = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].username;
	info.hostname = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].hostname;
	info.origin = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].origin;
	info.host = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].host;
	info.href = __WEBPACK_IMPORTED_MODULE_4__anchor__["a" /* default */].href;
	return info;
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_common_escape_reg_exp__ = __webpack_require__(49);


function parse(query) {
	var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
	var eq = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '=';

	var params = {};
	var rule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_source_common_escape_reg_exp__["a" /* default */])('([^?' + eq + sep + ']+)(' + eq + '([^' + sep + ']*))?');
	var pattern = new RegExp(rule, 'g');
	String(query).replace(pattern, function ($0, $1, $2, $3) {
		params[$1] = $3;
	});
	return params;
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = escapeRegExp;

function escapeRegExp(rule) {
  return String(rule).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toInt;

function toInt(value) {
  return 0 | parseInt(value, 10);
}

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_history_state__ = __webpack_require__(43);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "state", function() { return __WEBPACK_IMPORTED_MODULE_0__browser_history_state__; });



/***/ })
/******/ ]);
//# sourceMappingURL=pirate-history.state.map