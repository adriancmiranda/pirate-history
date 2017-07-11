export const param = (arg) => {
	const multi = /,/;
	if (toString.call(arg) === '[object String]' && multi.test(arg)) {
		arg = arg.split(multi);
	}
	if (/^false$/i.test(arg)) {
		return false;
	}
	if (/^true$/i.test(arg)) {
		return true;
	}
	if (/^([0-9]+|NaN|Infinity)$/.test(arg)) {
		return Number(arg);
	}
	return arg;
};

export const params = (argv) => {
	const args = Object.create(null);
	Object.keys(argv || '').forEach((arg) => {
		args[arg] = param(argv[arg]);
	});
	return args;
};
