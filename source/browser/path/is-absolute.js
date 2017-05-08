// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

import a from 'source/common/a';

export default function isAbsolute(path) {
	if (a(path, 'String')) {
		const len = path.length;
		if (len === 0) return false;
		let code = path.charCodeAt(0);
		if (code === 47/* / */ || code === 92/* \ */) {
			return true;
		} else if (
			(code >= 65/* A */ && code <= 90/* Z */) ||
			(code >= 97/* a */ && code <= 122/* z */)) {
			if (len > 2 && path.charCodeAt(1) === 58/* : */) {
				code = path.charCodeAt(2);
				if (code === 47/* / */ || code === 92/* \ */) {
					return true;
				}
			}
		}
	}
	return false;
}
