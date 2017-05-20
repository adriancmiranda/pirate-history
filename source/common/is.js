/**
 * @name is
 *
 * @description
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test.
 * @param {String} expectedType type waited.
 *
 * @return {Boolean} true if `value` is a type of `type`, false otherwise.
 *
 * @private
`*/
export default function is(expected, value) {
	return new RegExp(`(${expected})`).test(toString.call(value));
}
