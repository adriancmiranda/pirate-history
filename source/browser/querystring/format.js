/**
 * @name format
 *
 * @description
 *
 * @api public
`*/
export default function format(data, sep = '&', eq = '=') {
	const parts = [];
	for (const prop in data) {
		if (data.hasOwnProperty(prop)) {
			parts.push(`${encodeURIComponent(prop)}${eq}${encodeURIComponent(data[prop])}`);
		}
	}
	return parts.join(sep);
}
