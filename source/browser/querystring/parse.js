import escapeRegExp from 'source/common/escape-reg-exp';

export default function parse(query, sep = '&', eq = '=') {
	const params = {};
	const rule = escapeRegExp(`([^?${eq}${sep}]+)(${eq}([^${sep}]*))?`);
	const pattern = new RegExp(rule, 'g');
	String(query).replace(pattern, ($0, $1, $2, $3) => {
		params[$1] = $3;
	});
	return params;
}
