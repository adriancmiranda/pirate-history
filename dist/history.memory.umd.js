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
 * @moment Tuesday, July 11, 2017 12:44 AM
 * @commit f9130cfbdf21a74d0b1ace84d64494397afce0de
 * @homepage https://github.com/adriancmiranda/pirate-history
 * @author Adrian C. Miranda */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.history = global.history || {}, global.history.memory = global.history.memory || {})));
}(this, (function (exports) { 'use strict';

	var memory = {};

var memory$1 = Object.freeze({
		default: memory
	});

	exports.memory = memory$1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=history.memory.umd.js.map
