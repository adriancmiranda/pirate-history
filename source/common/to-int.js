/**
 * @name toInt
 *
 * @return {Number}
 *
 * @private
`*/
export default function toInt(value) {
	return 0 | parseInt(value, 10); // eslint-disable-line no-bitwise
}
