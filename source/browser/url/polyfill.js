import a from 'source/common/a';
import toInt from 'source/common/to-int';
import { isAbsolute } from 'source/browser/path';
import { parse as parseQuery } from 'source/browser/querystring';

const $a = document.createElement('a');
const defaultPorts = { http: 80, https: 443, ftp: 21, gopher: 70 };

export function normalize(url, baseUrlObject) {
	if (isAbsolute(Object(baseUrlObject).href)) {
		url = baseUrlObject.href;
	}
	if (document.documentMode) {
		$a.setAttribute('href', url);
		return $a.href;
	}
	return url;
}

export function parse(url, baseUrlObject) {
	const info = {};
	$a.setAttribute('href', normalize(url, baseUrlObject));
	info.pathname = $a.pathname.charAt(0) === '/' ? $a.pathname : `/${$a.pathname}`;
	info.protocol = $a.protocol ? $a.protocol.replace(/:$/, '') : '';
	info.search = $a.search ? $a.search.replace(/^\?/, '') : '';
	info.searchParams = parseQuery(info.search);
	info.hash = $a.hash ? $a.hash.replace(/^#!?/, '') : '';
	info.port = toInt($a.port) || defaultPorts[info.protocol] || null;
	info.password = $a.password;
	info.username = $a.username;
	info.hostname = $a.hostname;
	info.origin = $a.origin;
	info.host = $a.host;
	info.href = $a.href;
	return info;
}

/*!
|* @name URL
|* @role IE8 and IE9 fallback to `window.URL` Native
|* @see https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
|* @see http://caniuse.com/#search=URL
|* @support everywhere
`*/
export default class URL {
	constructor(url, baseUrlObject) {
		if (a(url, 'URL')) return url;
		return Object.assign(this, parse(url, baseUrlObject));
	}
}
