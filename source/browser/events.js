const events = [];

/*!
|* @name a
|*
|* @description
|* Test if `value` is a type of `type`.
|*
|* @param {Mixed} value value to test.
|* @param {String} typeWait type waited.
|*
|* @return {Boolean} true if `value` is a type of `type`, false otherwise.
|*
|* @api private
`*/
const a = (val, typeWait) =>
	toString.call(val) === `[object ${typeWait}]`
;

/*!
|* @name createEvent
|*
|* @description
|* Creates an event of the type specified. The returned object should be first
|* initialized and can then be passed to element.dispatchEvent.
|*
|* @param {String} type type is a string that represents the type of event to be created.
|* Possible event types include "UIEvents", "MouseEvents", "MutationEvents", and "HTMLEvents".
|*
|* @api public
`*/
export function createEvent(type) {
	let event = {};
	if (document.createEvent) {
		event = document.createEvent('HTMLEvents');
		event.initEvent(type, true, true);
	} else if (document.createEventObject) {
		event = document.createEventObject();
		event.eventType = type;
	}
	event.eventName = type;
	return event;
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
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Function} listener
|* @param {Object} options
|* @param {Boolean} useCapture
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
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Function} listener
|* @param {Object} options
|* @param {Boolean} useCapture
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
|* @param {HTMLElement} domEl
|* @param {String} type The type is the name of Event object to be dispatched.
|* @param {Mixed} data
|*
|* @returns {Boolean} cancelled Indicating whether the event was canceled
|* by an event handler.
|*
|* @api public
`*/
export function dispatchEvent(domEl, type, data) {
	let cancelled;
	const event = createEvent(type);
	event.state = data;
	if (domEl.dispatchEvent) {
		cancelled = domEl.dispatchEvent(event);
	} else if (domEl.fireEvent && window.htmlEvents[`on${type}`]) {
		cancelled = domEl.fireEvent(`on${event.eventType}`, event);
	} else if (domEl[type]) {
		cancelled = domEl[type](event);
	} else if (domEl[`on${type}`]) {
		cancelled = domEl[`on${type}`](event);
	}
	return a(cancelled, 'Boolean') ? cancelled : true;
}

/*!
|* @name emit
|*
|* @description
|* Execute all handlers and behaviors attached to the matched elements
|* for the given event type.
|*
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Mixed} data
|*
|* @api public
`*/
export function emit(domEl, type, data) {
	const numArgs = arguments.length;
	if (numArgs <= 1 || a(domEl, 'String')) {
		const dispatched = [];
		for (let id = events.length - 1; id >= 0; id -= 1) {
			const event = events[id];
			const eventType = numArgs ? domEl : event.type;
			dispatched.push(dispatchEvent(event.domEl, eventType, data));
		}
		return dispatched;
	}
	return dispatchEvent(domEl, type, data);
}

/*!
|* @name on
|*
|* @description
|* Attach an event handler function for one or more events to the
|* selected elements.
|*
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Function} listener
|* @param {Object} options
|* @param {Boolean} useCapture
|*
|* @api public
`*/
export function on(domEl, type, listener, ...options) {
	for (let id = 0; id < events.length; id += 1) {
		const event = events[id];
		if (event.type === type && event.listener === listener) {
			return;
		}
	}
	addEventListener(domEl, type, listener, ...options);
	events.push({ domEl, type, listener });
}

/*!
|* @name off
|*
|* @description
|* Remove event handler(s) from element(s).
|*
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Function} listener
|* @param {Object} options
|* @param {Boolean} useCapture
|*
|* @api public
`*/
export function off(domEl, type, listener, ...options) {
	const numArgs = arguments.length;
	const domIsAnEventType = a(domEl, 'String');
	const eventType = domIsAnEventType ? domEl : type;
	for (let id = events.length - 1; id >= 0; id -= 1) {
		const event = events[id];
		const allElements = numArgs <= 1;
		const hasSameType = numArgs > 1 && event.type === eventType;
		const isSameEvent = numArgs > 2 && event.listener === listener && hasSameType;
		if (allElements) {
			event.type = domIsAnEventType ? eventType : event.type;
			removeEventListener(event.domEl, event.type, event.listener, ...options);
			events.splice(id, 1);
		} else if (hasSameType || isSameEvent) {
			removeEventListener(domEl, eventType, event.listener, ...options);
			events.splice(id, 1);
		}
	}
}

/*!
|* @name one
|*
|* @description
|* Attach a handler to an event for the elements. The handler is executed at most one
|* per element per event type.
|*
|* @param {HTMLElement} domEl
|* @param {String} type
|* @param {Function} listener
|* @param {Object} options
|* @param {Boolean} useCapture
|*
|* @api public
`*/
export function one(domEl, type, listener, ...options) {
	on(domEl, type, function handler(event) {
		off(domEl, type, handler, ...options);
		listener(event);
	}, ...options);
}

/*!
|* @name hasEvent
|*
|* @description
|* Checks whether the `dom-event-dispatcher` object has any listeners registered for a specific
|* type of event. This allows you to determine where an `dom-event-dispatcher` object has altered
|* handling of an event type in the event flow hierarchy. To determine whether a specific event
|* type actually triggers an event listener, use `willEmit()`.
|*
|* The difference between `hasEvent()` and `willEmit()` is that `hasEvent()` examines only the
|* object to which it belongs, whereas `willEmit()` examines the entire event flow for the event
|* specified by the `type` parameter.
|*
|* @param {HTMLElement} domEl
|* @param {String} type The type of event.
|*
|* @returns {Boolean} A value of `true` if a listener of the specified type is registered;
|* `false` otherwise.
|*
|* @api public
`*/
export function hasEvent(domEl, type) {
	for (let id = events.length - 1; id >= 0; id -= 1) {
		const event = events[id];
		if (event.domEl === domEl && event.type === type) {
			return true;
		}
	}
	return false;
}

/*!
|* @name willEmit
|*
|* @description
|* Checks whether an event listener is registered with this `dom-event-dispatcher` object or
|* any of its ancestors for the specified event type. This method returns `true` if an event
|* listener is triggered during any phase of the event flow when an event of the specified
|* type is dispatched to this `dom-event-dispatcher` object or any of its descendants.
|*
|* The difference between the `hasEvent()` and the `willEmit()` methods is that `hasEvent()`
|* examines only the object to which it belongs, whereas the `willEmit()` method examines
|* the entire event flow for the event specified by the type parameter.
|*
|* @param {String} type The type of event.
|*
|* @returns {Boolean} A value of `true` if a listener of the specified type is registered;
|* `false` otherwise.
|*
|* @api public
`*/
export function willEmit(type) {
	for (let id = events.length - 1; id >= 0; id -= 1) {
		if (events[id].type === type) {
			return true;
		}
	}
	return false;
}
