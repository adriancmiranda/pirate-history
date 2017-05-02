/*!
|*
`*/
const events = [];

export function addEventListener(domEl, type, listener, options) {
	if (domEl.addEventListener) {
		domEl.addEventListener(type, listener, options);
	} else if (domEl.attachEvent && window.htmlEvents[`on${type}`]) {
		domEl.attachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = listener;
	}
}

export function removeEventListener(domEl, type, listener, options) {
	if (domEl.removeEventListener) {
		domEl.removeEventListener(type, listener, options);
	} else if (domEl.detachEvent && window.htmlEvents[`on${type}`]) {
		domEl.detachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = null;
	}
}

export function dispatchEvent(domEl, type, data) {
	let event;
	if (document.createEvent) {
		event = document.createEvent('HTMLEvents');
		event.initEvent(type, true, true);
	} else if (document.createEventObject) {
		event = document.createEventObject();
		event.eventType = type;
	}
	event.state = data;
	event.eventName = type;
	if (domEl.dispatchEvent) {
		domEl.dispatchEvent(event);
	} else if (domEl.fireEvent && window.htmlEvents[`on${type}`]) {
		domEl.fireEvent(`on${event.eventType}`, event);
	} else if (domEl[type]) {
		domEl[type](event);
	} else if (domEl[`on${type}`]) {
		domEl[`on${type}`](event);
	}
}

/*!
|*
`*/
export function emit(domEl, type, data) {
	dispatchEvent(domEl, type, data);
}

/*!
|*
`*/
export function on(domEl, type, listener, options) {
	for (let id = 0; id < events.length; id += 1) {
		const event = events[id];
		if (event.type === type && event.listener === listener) {
			return;
		}
	}
	addEventListener(domEl, type, listener, options);
	events.push({ domEl, type, listener });
}

/*!
|*
`*/
export function off(domEl, type, listener, options) {
	const numArgs = arguments.length;
	const domIsAnEventType = toString.call(domEl) === '[object String]';
	const eventType = domIsAnEventType ? domEl : type;
	for (let id = events.length - 1; id >= 0; id -= 1) {
		const event = events[id];
		const allElements = numArgs <= 1;
		const hasSameType = numArgs > 1 && event.type === eventType;
		const isSameEvent = numArgs > 2 && event.listener === listener && hasSameType;
		if (allElements) {
			event.type = domIsAnEventType ? eventType : event.type;
			removeEventListener(event.domEl, event.type, event.listener, options);
			events.splice(id, 1);
		} else if (hasSameType || isSameEvent) {
			removeEventListener(domEl, eventType, event.listener, options);
			events.splice(id, 1);
		}
	}
}

/*!
|*
`*/
export function once(domEl, type, listener) {
	on(domEl, type, function handler(event) {
		off(domEl, type, handler);
		listener(event);
	});
}

/*!
|*
`*/
export function hasEvent() {
}

/*!
|*
`*/
export function willEmit() {
}
