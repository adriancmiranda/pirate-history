/*!
|* @name a
|*
|* @description
|* Test if `value` is a type of `type`.
|*
|* @param {Mixed} value value to test.
|* @param {String} expectedType type waited.
|*
|* @return {Boolean} true if `value` is a type of `type`, false otherwise.
|*
|* @api private
`*/
export default function a(value, expectedType) {
	return toString.call(value) === `[object ${expectedType}]`;
}
