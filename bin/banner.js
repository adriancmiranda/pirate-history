/* eslint-disable import/no-extraneous-dependencies */
import Git from 'git-revision-webpack-plugin';
import pirateFlag from 'pirate-flag';
import moment from 'moment';
import pack from '../package.json';

moment.locale();

const git = new Git({ lightweightTags: true, branch: true });

export default options => pirateFlag(pack, {
	moment: moment().format('LLLL'),
	commit: git.commithash(),
	homepage: pack.homepage,
	author: pack.author,
}, options);
