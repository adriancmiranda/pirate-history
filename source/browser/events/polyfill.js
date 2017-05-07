/*!
|* @name createEvent
|*
|* @description
|* Creates an event of the type specified. The returned object should be first
|* initialized and can then be passed to `element.dispatchEvent`.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|* Possible event types include "UIEvents", "MouseEvents", "MutationEvents",
|* and "HTMLEvents".
|*
|* @api public
`*/
export function createEvent(type, options) {
	let event = { type };
	const opts = Object.assign({ bubbles: false, cancelable: false }, options);
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
	return Object.assign(event, opts);
}

/*!
|* @name addEventListener
|*
|* @description
|* The EventTarget.addEventListener() method adds the specified EventListener-compatible
|* object to the list of event listeners for the specified event type on the EventTarget
|* on which it's called. The event target may be an Element in a document, the Document
|* itself, a Window, or any other object that supports events (such as XMLHttpRequest).
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Function} listener The listener function that processes the event.
|* This function must accept an Event object as its only parameter and must return nothing.
|*
|* @param {Object} options An options object that specifies characteristics about the event
|* listener.
|*
|* @param {Boolean} useCapture Determines whether the listener works in the capture phase or
|* the target and bubbling phases. If useCapture is set to true, the listener processes the
|* event only during the capture phase and not in the target or bubbling phase.
|* If useCapture is false, the listener processes the event only during the target or bubbling
|* phase.
|* To listen for the event in all three phases, call addEventListener twice, once
|* with useCapture set to true, then again with useCapture set to false.
|*
|* @api public
`*/
export function addEventListener(domEl, type, listener, ...options) {
	if (domEl.addEventListener) {
		domEl.addEventListener(type, listener, ...options);
	} else if (domEl.attachEvent && window.htmlEvents[`on${type}`]) {
		domEl.attachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = listener;
	}
}

/*!
|* @name removeEventListener
|*
|* @description
|* The EventTarget.removeEventListener() method removes from the EventTarget an event
|* listener previously registered with EventTarget.addEventListener(). The event
|* listener to be removed is identified using a combination of the event type, the
|* event listener function itself, and various optional options that may affect the
|* matching process; see Matching event listeners for removal.
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Function} listener The listener function that processes the event.
|* This function must accept an Event object as its only parameter and must return nothing.
|*
|* @param {Object} options An options object that specifies characteristics about the event
|* listener.
|*
|* @param {Boolean} useCapture Determines whether the listener works in the capture phase or
|* the target and bubbling phases. If useCapture is set to true, the listener processes the
|* event only during the capture phase and not in the target or bubbling phase.
|* If useCapture is false, the listener processes the event only during the target or
|* bubbling phase.
|* To listen for the event in all three phases, call addEventListener twice, once
|* with useCapture set to true, then again with useCapture set to false.
|*
|* @api public
`*/
export function removeEventListener(domEl, type, listener, ...options) {
	if (domEl.removeEventListener) {
		domEl.removeEventListener(type, listener, ...options);
	} else if (domEl.detachEvent && window.htmlEvents[`on${type}`]) {
		domEl.detachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = null;
	}
}

/*!
|* @name dispatchEvent
|*
|* @description
|* Dispatches an Event at the specified EventTarget, invoking the affected EventListeners
|* in the appropriate order. The normal event processing rules (including the capturing
|* and optional bubbling phase) also apply to events dispatched manually with
|* dispatchEvent().
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the
|* EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Mixed} options
|*
|* @returns {Boolean} cancelled Indicating whether the event was canceled
|* by an event handler.
|*
|* @api public
`*/
export function dispatchEvent(domEl, type, options) {
	let cancelled;
	const event = createEvent(type, options);
	if (domEl.dispatchEvent) {
		cancelled = domEl.dispatchEvent(event);
	} else if (domEl.fireEvent && window.htmlEvents[`on${event.type}`]) {
		cancelled = domEl.fireEvent(`on${event.type}`, event);
	} else if (domEl[event.type]) {
		cancelled = domEl[event.type](event);
	} else if (domEl[`on${event.type}`]) {
		cancelled = domEl[`on${event.type}`](event);
	}
	return typeof cancelled === 'undefined' || cancelled;
}
