import * as dispatcher from 'source/browser/events/polyfill';
import parsePath from 'source/browser/path/parse';

export const HashChangeEvent = 'hashchange';
export const HashChangeHook = `on${HashChangeEvent}`;
export const PopStateEvent = 'popstate';
export const PopStateHook = `on${PopStateEvent}`;
export const ReplaceStateEvent = 'replacestate';
export const ChangeStateEvent = 'changestate';
export const PushStateEvent = 'pushstate';

/*!
 * @name ua
 *
 * @description
 *
 * @api private
`*/
const ua = window.navigator.userAgent;

/*!
 * @name native
 *
 * @description
 *
 * @api public
`*/
export const native = window.history;

/*!
 * @name hasStateList
 *
 * @description
 *
 * @return {Boolean}
 *
 * @see http://caniuse.com/#search=history
 *
 * @api public
`*/
export const hasStateList = 'pushState' in Object(native) &&
	!/Android\s(2\..+|4\.0)|Mobile\sSafari/gi.test(ua) &&
	/Windows\sPhone|Chrome/gi.test(ua)
;

/*!
 * @name updateStateList
 *
 * @description
 *
 * @api private
`*/
function updateStateList(URL, put) {
	put(parsePath(URL)); // @TODO: storage
}

/*!
 * @name pushState
 *
 * @description
 *
 * @api public
`*/
export function pushState(state, title, URL) {
	return updateStateList(URL, () => {
		native.pushState(state, title, URL);
		dispatcher.dispatchEvent(window, PushStateEvent, { state, title, URL });
		dispatcher.dispatchEvent(window, ChangeStateEvent, { state, title, URL });
	});
}

/*!
 * @name replaceState
 *
 * @description
 *
 * @api public
`*/
export function replaceState(state, title, URL) {
	return updateStateList(URL, () => {
		native.replaceState(state, title, URL);
		dispatcher.dispatchEvent(window, ReplaceStateEvent, { state, title, URL });
		dispatcher.dispatchEvent(window, ChangeStateEvent, { state, title, URL });
	});
}

/*!
 * @name go
 *
 * @description
 *
 * @api public
`*/
export function go(factor) {
	return native.go(factor);
}

/*!
 * @name forward
 *
 * @description
 *
 * @api public
`*/
export function forward() {
	return native.forward();
}

/*!
 * @name back
 *
 * @description
 *
 * @api public
`*/
export function back() {
	return native.back();
}
