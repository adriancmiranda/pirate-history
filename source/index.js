'use strict';

function history() {
	return '☠  There\'s nothing for you here yet ☠';
}

history.pushState = function pushState(state, title, url) {
	return window.history.pushState(state, title, url);
};

history.replaceState = function replaceState(state, title, url) {
	return window.history.replaceState(state, title, url);
};

history.go = function go(factor) {
	return window.history.go(factor);
};

history.flush = function flush() {
	var moves = window.history.length - 1;
	return history.go(-moves);
};

module.exports = history;
