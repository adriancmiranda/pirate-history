export function trigger(domEl, type, state) {
	let event;
	if (document.createEvent) {
		event = document.createEvent('HTMLEvents');
		event.initEvent(type, true, true);
	} else if (document.createEventObject) {
		event = document.createEventObject();
		event.eventType = type;
	}
	event.state = state;
	event.eventName = type;
	if (domEl.dispatchEvent) {
		domEl.dispatchEvent(event);
	} else if (domEl.fireEvent && window.htmlEvents[`on${type}`]) {
		domEl.fireEvent(`on${event.eventType}`, event);
	} else if (domEl[type]) {
		domEl[type]();
	} else if (domEl[`on${type}`]) {
		domEl[`on${type}`]();
	}
}

export function on(domEl, type, listener) {
	if (domEl.addEventListener) {
		domEl.addEventListener(type, listener, false);
	} else if (domEl.attachEvent && window.htmlEvents[`on${type}`]) {
		domEl.attachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = listener;
	}
}

export function off(domEl, type, listener) {
	if (domEl.removeventListener) {
		domEl.removeEventListener(type, listener, false);
	} else if (domEl.detachEvent && window.htmlEvents[`on${type}`]) {
		domEl.detachEvent(`on${type}`, listener);
	} else {
		domEl[`on${type}`] = null;
	}
}
