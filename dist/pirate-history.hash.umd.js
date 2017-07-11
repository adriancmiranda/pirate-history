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
	(global['pirate-history'] = global['pirate-history'] || {}, global['pirate-history'].hash = factory());
}(this, (function () { 'use strict';

	function push() {}

	function replace(hash) {
		return window.location.replace(('#' + hash).replace(/^#!?/, ''));
	}

var hash$1 = Object.freeze({
		push: push,
		replace: replace
	});

	return hash$1;

})));
