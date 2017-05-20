import parseQuery from 'source/browser/querystring/parse';
import toInt from 'source/common/to-int';
import is from 'source/common/is';
import normalize from './normalize';
import $a from './anchor';

const DEFAULT_PORTS = { http: 80, https: 443, ftp: 21, gopher: 70 };

export default function parse(href, baseUrlObject, defaultPorts = DEFAULT_PORTS) {
	const info = {};
	if (is('Function', href)) href = href(baseUrlObject, defaultPorts);
	if (!is('String', href)) {
		const base = document.getElementsByTagName('base')[0];
		href = (base && base.getAttribute('href')) || window.location.href;
	}
	$a.setAttribute('href', normalize(href, baseUrlObject));
	info.pathname = $a.pathname.charAt(0) === '/' ? $a.pathname : `/${$a.pathname}`;
	info.protocol = $a.protocol ? $a.protocol.replace(/:$/, '') : '';
	info.search = $a.search ? $a.search.replace(/^\?/, '') : '';
	info.searchParams = parseQuery(info.search);
	info.hash = $a.hash ? $a.hash.replace(/^#!?/, '') : '';
	info.port = toInt($a.port) || defaultPorts[info.protocol] || null;
	info.username = $a.username || undefined;
	info.password = $a.password || undefined;
	info.hostname = $a.hostname;
	info.origin = $a.origin;
	info.host = $a.host;
	info.href = $a.href;
	return info;
}
