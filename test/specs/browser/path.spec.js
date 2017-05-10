import { expect } from 'chai';
import * as path from 'source/browser/path';

describe('browser/path', () => {
	describe('#is-absolute', () => {
		expect(path.isAbsolute('/foo')).to.be.true;
	});

	describe('#parse', () => {
		const loc = path.parse('/foo');
		expect(loc.pathname).to.equal('/foo');
		// expect(loc.protocol).to.equal();
		// expect(loc.search).to.equal();
		// expect(loc.searchParams).to.equal();
		// expect(loc.hash).to.equal();
		// expect(loc.port).to.equal();
		// expect(loc.password).to.equal();
		// expect(loc.username).to.equal();
		// expect(loc.hostname).to.equal();
		// expect(loc.origin).to.equal();
		// expect(loc.host).to.equal();
		// expect(loc.href).to.equal();
	});
});
