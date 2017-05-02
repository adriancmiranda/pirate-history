import { a } from 'source/common';
import * as polyfill from './polyfill';

/*!
|* @name events
|*
|* @description
|* A collection of events.
|*
|* @api private
`*/
const events = [];

/*!
|* @name emit
|*
|* @description
|* Execute all handlers and behaviors attached to the matched elements
|* for the given event type.
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
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
			dispatched.push(polyfill.dispatchEvent(event.domEl, eventType, data));
		}
		return dispatched;
	}
	return polyfill.dispatchEvent(domEl, type, data);
}

/*!
|* @name on
|*
|* @description
|* Attach an event handler function for one or more events to the
|* selected elements.
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Function} listener The listener function that processes the event.
|* This function must accept an Event object as its only parameter and must return nothing.
|*
|* @param {Object} options An options object that specifies characteristics about the
|* event listener.
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
export function on(domEl, type, listener, ...options) {
	for (let id = 0; id < events.length; id += 1) {
		const event = events[id];
		if (event.type === type && event.listener === listener) {
			return;
		}
	}
	polyfill.addEventListener(domEl, type, listener, ...options);
	events.push({ domEl, type, listener });
}

/*!
|* @name off
|*
|* @description
|* Remove event handler(s) from element(s).
|*
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Function} listener The listener function that processes the event.
|* This function must accept an Event object as its only parameter and must return nothing.
|*
|* @param {Object} options An options object that specifies characteristics about the
|* event listener.
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
			polyfill.removeEventListener(event.domEl, event.type, event.listener, ...options);
			events.splice(id, 1);
		} else if (hasSameType || isSameEvent) {
			polyfill.removeEventListener(domEl, eventType, event.listener, ...options);
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
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
|*
|* @param {Function} listener The listener function that processes the event.
|* This function must accept an Event object as its only parameter and must return nothing.
|*
|* @param {Object} options An options object that specifies characteristics about the
|* event listener.
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
|* @param {HTMLElement} domEl The target object for events dispatched to the EventTarget object.
|*
|* @param {String} type The type is the name of Event object to be dispatched.
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
|* @param {String} type The type is the name of Event object to be dispatched.
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
