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
 * @moment Saturday, May 20, 2017 5:03 PM
 * @commit b75bbcfcbc779ac518c67fe74e913d5115f94604
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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;

function is(expected, value) {
  return new RegExp("(" + expected + ")").test(toString.call(value));
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7)
  , defined = __webpack_require__(6);
module.exports = function(it){
  return IObject(defined(it));
};

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
var toIObject = __webpack_require__(9)
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
  , IObject  = __webpack_require__(7)
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
  , toIObject    = __webpack_require__(9)
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

var toInteger = __webpack_require__(8)
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
var toInteger = __webpack_require__(8)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
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
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = emit;
/* harmony export (immutable) */ __webpack_exports__["a"] = on;
/* harmony export (immutable) */ __webpack_exports__["c"] = off;
/* harmony export (immutable) */ __webpack_exports__["b"] = one;
/* unused harmony export hasEvent */
/* harmony export (immutable) */ __webpack_exports__["e"] = willEmit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_source_common_is__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfill__ = __webpack_require__(12);



var events = [];

function emit(domEl, name, options) {
  var cancelled = false;
  var numArgs = arguments.length;
  var types = String(name).split(' ');
  var numTypes = types.length;
  var domIsAnEventType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_source_common_is__["a" /* default */])('String', domEl);
  for (var ix = 0; ix < numTypes; ix += 1) {
    var type = types[ix];
    if (numArgs <= 1 || domIsAnEventType) {
      var dispatched = [];
      for (var id = events.length - 1; id >= 0; id -= 1) {
        var event = events[id];
        var eventType = numArgs ? domEl : event.type;
        dispatched.push(__WEBPACK_IMPORTED_MODULE_1__polyfill__["dispatchEvent"](event.domEl, eventType, options));
      }
      return dispatched;
    }
    if (__WEBPACK_IMPORTED_MODULE_1__polyfill__["dispatchEvent"](domEl, type, options)) {
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
    __WEBPACK_IMPORTED_MODULE_1__polyfill__["addEventListener"].apply(__WEBPACK_IMPORTED_MODULE_1__polyfill__, [domEl, type, listener].concat(options));
    events.push({ domEl: domEl, type: type, listener: listener });
  }
}

function off(domEl, name, listener) {
  for (var _len2 = arguments.length, options = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    options[_key2 - 3] = arguments[_key2];
  }

  var types = String(name).split(' ');
  var numArgs = arguments.length;
  var domIsAnEventType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_source_common_is__["a" /* default */])('String', domEl);
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
        __WEBPACK_IMPORTED_MODULE_1__polyfill__["removeEventListener"].apply(__WEBPACK_IMPORTED_MODULE_1__polyfill__, [event.domEl, event.type, event.listener].concat(options));
        events.splice(iy, 1);
      } else if (hasSameType || isSameEvent) {
        __WEBPACK_IMPORTED_MODULE_1__polyfill__["removeEventListener"].apply(__WEBPACK_IMPORTED_MODULE_1__polyfill__, [domEl, eventType, event.listener].concat(options));
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

function hasEvent(domEl, name) {
  var types = String(name).split(' ');
  for (var ix = types.length - 1; ix >= 0; ix -= 1) {
    var type = types[ix];
    for (var iy = events.length - 1; iy >= 0; iy -= 1) {
      var event = events[iy];
      if (event.domEl === domEl && event.type === type) {
        return true;
      }
    }
  }
  return false;
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

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_events__ = __webpack_require__(41);



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

__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(pirate, HashChangeHook, {
	set: function setOnHashChange(val) {
		if (!val) pirate.off(HashChangeEvent);
		pirate.on(HashChangeEvent, onHashChange(val));
	},
	get: function getOnHashChange() {
		return window[HashChangeHook];
	}
});

__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(pirate, PopStateHook, {
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

pirate.on = function on(type, listener, options) {
	__WEBPACK_IMPORTED_MODULE_1__browser_events__["a" /* on */](window, type, listener, options);
};

pirate.one = function one(type, listener, options) {
	return __WEBPACK_IMPORTED_MODULE_1__browser_events__["b" /* one */](window, type, listener, options);
};

pirate.off = function off(type, listener, options) {
	__WEBPACK_IMPORTED_MODULE_1__browser_events__["c" /* off */](window, event.type, event.listener, options);
};

pirate.emit = function emit(type, state) {
	return __WEBPACK_IMPORTED_MODULE_1__browser_events__["d" /* emit */](window, type, { bubbles: true, cancelable: true, detail: { state: state } });
};

pirate.willEmit = function willEmit(type) {
	return __WEBPACK_IMPORTED_MODULE_1__browser_events__["e" /* willEmit */](type);
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

/* harmony default export */ __webpack_exports__["default"] = (pirate);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ })
/******/ ]);
//# sourceMappingURL=pirate-history.map