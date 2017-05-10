import isAbsolute from './is-absolute';
import $a from './anchor';

export default function normalize(href, baseUrlObject) {
	if (isAbsolute(Object(baseUrlObject).href)) {
		href = `${baseUrlObject.href}/${href}`;
	}
	if (document.documentMode) {
		$a.setAttribute('href', href);
		return $a.href;
	}
	return href;
}
