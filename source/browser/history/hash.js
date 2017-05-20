export function push() {
}

export function replace(hash) {
	// history.replaceState(undefined, undefined, '#hash');
	return window.location.replace(`#${hash}`.replace(/^#!?/, ''));
}
