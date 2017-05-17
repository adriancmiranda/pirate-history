import { expect } from 'chai';
import * as path from 'source/browser/path';

describe('browser/path', () => {
	describe('#is-absolute', () => {
		expect(path.isAbsolute('./foo')).to.be.false;
		expect(path.isAbsolute('/foo')).to.be.true;
		expect(path.isAbsolute('foo')).to.be.false;
	});

	describe('#parse', () => {
		const loc = path.parse('/foo?baz=test#bar');
		expect(loc.pathname).to.equal('/foo');
		expect(loc.protocol).to.equal('http');
		expect(loc.search).to.equal('baz=test');
		expect(loc.searchParams.baz).to.equal('test');
		expect(loc.hash).to.equal('bar');
		expect(loc.port).to.equal(9876);
		expect(loc.password).to.equal(undefined);
		expect(loc.username).to.equal(undefined);
		expect(loc.hostname).to.equal('localhost');
		expect(loc.origin).to.equal('http://localhost:9876');
		expect(loc.host).to.equal('localhost:9876');
		expect(loc.href).to.equal('http://localhost:9876/foo?baz=test#bar');
	});
});
