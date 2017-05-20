import { expect } from 'chai';
import * as path from 'source/browser/path';

describe('browser/path', () => {
	describe('#is-absolute', () => {
		expect(path.isAbsolute('./foo')).to.be.false;
		expect(path.isAbsolute('/foo')).to.be.true;
		expect(path.isAbsolute('foo')).to.be.false;
	});

	describe('#parse', () => {
		const loc = path.parse('http://user:pass@domain.extension:9876/foo?baz=test#bar');
		expect(loc.pathname).to.equal('/foo');
		expect(loc.protocol).to.equal('http');
		expect(loc.search).to.equal('baz=test');
		expect(loc.searchParams.baz).to.equal('test');
		expect(loc.hash).to.equal('bar');
		expect(loc.port).to.equal(9876);
		expect(loc.username).to.equal('user');
		expect(loc.password).to.equal('pass');
		expect(loc.hostname).to.equal('domain.extension');
		expect(loc.origin).to.equal('http://domain.extension:9876');
		expect(loc.host).to.equal('domain.extension:9876');
		expect(loc.href).to.equal('http://user:pass@domain.extension:9876/foo?baz=test#bar');
	});
});
