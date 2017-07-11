import build from './build';

export default [
	build('history.memory', 'source/history.memory'),
	build('history.state', 'source/history.state'),
	build('history.hash', 'source/history.hash'),
	build('history', 'source/index'),
];
