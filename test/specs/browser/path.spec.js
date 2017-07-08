import * as path from 'source/browser/path';

describe('browser/path', () => {
	it('#is-absolute', () => {
		expect(path.isAbsolute('./foo')).toBe(false);
		expect(path.isAbsolute('/foo')).toBe(true);
		expect(path.isAbsolute('foo')).toBe(false);
	});

	it('#parse', () => {
		const url = path.parse('http://user:pass@domain.extension:9876/foo?baz=test#bar');
		expect(url).toEqual(jasmine.any(Object));
		expect(url.pathname).toEqual('/foo');
		expect(url.protocol).toEqual('http');
		expect(url.search).toEqual('baz=test');
		expect(url.searchParams.baz).toEqual('test');
		expect(url.hash).toEqual('bar');
		expect(url.port).toEqual(9876);
		expect(url.username).toEqual('user');
		expect(url.password).toEqual('pass');
		expect(url.hostname).toEqual('domain.extension');
		expect(url.origin).toEqual('http://domain.extension:9876');
		expect(url.host).toEqual('domain.extension:9876');
		expect(url.href).toEqual('http://user:pass@domain.extension:9876/foo?baz=test#bar');
	});
});
