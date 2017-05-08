/*!
|* @name toInt
|*
|* @return {Number}
|*
|* @api private
`*/
export default function toInt(value) {
	return 0 | parseInt(value, 10); // eslint-disable-line no-bitwise
}
