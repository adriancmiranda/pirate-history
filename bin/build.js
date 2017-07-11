/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import optimizeJs from 'rollup-plugin-optimize-js';
import gzip from 'rollup-plugin-gzip';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import { params } from './argv';
import flag from './banner';

const argv = params(process.env);
const banner = argv.SIGN ? flag({ comment: true }) : '';
const preamble = argv.SIGN ? flag({ comment: true, image: [''] }) : '';
const target = (name, format) => ({
	dest: `./dist/${name}.${format}${argv.MINIFY ? '.min' : ''}.js`,
	format,
});

export default (moduleName, entry, indent = true) => ({
	banner,
	indent,
	moduleName,
	entry: `./${entry}.js`,
	sourceMap: argv.MINIFY,
	targets: [
		target(moduleName, 'iife'),
		target(moduleName, 'umd'),
		target(moduleName, 'amd'),
	],
	plugins: [
		nodeResolve({ jsnext: true, main: true, browser: true }),
		commonjs(),
		babel({ exclude: 'node_modules/**' }),
	].concat(argv.MINIFY ? [
		uglify({ output: { preamble } }, minify),
		optimizeJs(),
	].concat(argv.GZIP ? [gzip()] : []) : []),
});
