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
this.history = this.history || {};
(function (exports) {
	'use strict';

	function push() {}

	function replace(hash) {
		return window.location.replace(('#' + hash).replace(/^#!?/, ''));
	}

var hash = Object.freeze({
		push: push,
		replace: replace
	});

	exports.hash = hash;

}((this.history.hash = this.history.hash || {})));
//# sourceMappingURL=history.hash.iife.js.map
