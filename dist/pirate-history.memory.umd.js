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
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['pirate-history'] = global['pirate-history'] || {}, global['pirate-history'].memory = factory());
}(this, (function () { 'use strict';

	var memory$1 = {};

var memory$2 = Object.freeze({
		default: memory$1
	});

	return memory$2;

})));
