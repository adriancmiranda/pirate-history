/**
 * @name stringify
 *
 * @description
 *
 * @api public
`*/
export default function stringify(data, sep = '&', eq = '=') {
	const parts = [];
	Object.keys(data === Object(data) ? data : {}).forEach((prop) => {
		parts.push(`${encodeURIComponent(prop)}${eq}${encodeURIComponent(data[prop])}`);
	});
	return parts.join(sep);
}
