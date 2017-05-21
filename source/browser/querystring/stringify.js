/**
 * @name stringify
 *
 * @description
 *
 * @api public
`*/
export default function stringify(data, sep = '&', eq = '=') {
	const parts = [];
	for (const prop in data) {
		if (data.hasOwnProperty(prop)) {
			parts.push(`${encodeURIComponent(prop)}${eq}${encodeURIComponent(data[prop])}`);
		}
	}
	return parts.join(sep);
}
