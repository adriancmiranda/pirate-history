import { expect } from 'chai';
import * as path from 'source/browser/path';

describe('browser/path', () => {
	describe('#is-absolute', () => {
		expect(path.isAbsolute('./foo')).to.be.false;
		expect(path.isAbsolute('/foo')).to.be.true;
		expect(path.isAbsolute('foo')).to.be.false;
	});

	describe('#parse', () => {
		const url = path.parse('http://user:pass@domain.extension:9876/foo?baz=test#bar');
		expect(url.pathname).to.equal('/foo');
		expect(url.protocol).to.equal('http');
		expect(url.search).to.equal('baz=test');
		expect(url.searchParams.baz).to.equal('test');
		expect(url.hash).to.equal('bar');
		expect(url.port).to.equal(9876);
		expect(url.username).to.equal('user');
		expect(url.password).to.equal('pass');
		expect(url.hostname).to.equal('domain.extension');
		expect(url.origin).to.equal('http://domain.extension:9876');
		expect(url.host).to.equal('domain.extension:9876');
		expect(url.href).to.equal('http://user:pass@domain.extension:9876/foo?baz=test#bar');
	});
});
