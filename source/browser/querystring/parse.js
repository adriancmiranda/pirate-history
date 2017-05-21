import escapeRegExp from 'source/common/escape-reg-exp';

/**
 * @name parse
 *
 * @description
 *
 * @api public
`*/
export default function parse(query, sep = '&', eq = '=') {
	const searchParams = {};
	const rule = `([^?${eq}${sep}]+)(${escapeRegExp(eq)}([^${sep}]*))?`;
	const pattern = new RegExp(rule, 'g');
	String(query).replace(pattern, ($0, $1, $2, $3) => {
		searchParams[$1] = $3;
	});
	return searchParams;
}
