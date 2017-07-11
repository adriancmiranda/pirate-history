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

	function push() {}

	function replace(hash) {
		return window.location.replace(('#' + hash).replace(/^#!?/, ''));
	}

var hash = Object.freeze({
		push: push,
		replace: replace
	});

	exports.hash = hash;

	Object.defineProperty(exports, '__esModule', { value: true });

});
