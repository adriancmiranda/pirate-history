/*!
|* @name escapeRegExp
|*
|* @return {String}
|*
|* @api private
`*/
export default function escapeRegExp(rule) {
	return String(rule).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
