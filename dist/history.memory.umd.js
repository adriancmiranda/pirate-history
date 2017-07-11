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
 * @moment Tuesday, July 11, 2017 1:46 AM
 * @commit 05127b26388a9df84066ca775e5841842d258ea9
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
