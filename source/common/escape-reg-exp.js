/**
 * @name escapeRegExp
 *
 * @return {String}
 *
 * @private
`*/
export default function escapeRegExp(rule) {
	return String(rule).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
