/* eslint-disable no-console */
import history from 'index';
import states from './states';
import UI from './ui';

const ui = new UI('#fixture');

const $sectionContent = ui.prepend(ui.createElement('pre', {
	style: {
		color: '#333',
		marginBottom: '10px',
	},
}));

const $infoBox = ui.createTextArea({
	value: `hasStateList: ${history.hasStateList}`,
	readOnly: true,
	style: {
		marginTop: '10px',
		display: 'block',
		width: '100%',
	},
});

const $disposeButton = ui.createButton({
	value: 'remove all events',
	style: {
		marginTop: '10px',
	},
	onclick() {
		history.removeEventListener();
	},
});

function updateContent(state) {
	document.title = state.title;
	$sectionContent.innerHTML = [state.template, `url: ${state.url}`].join('<br>');
}

function register(state, index, stateList) {
	ui.append(ui.createButton({
		dataset: state,
		value: state.title,
		style: {
			marginRight: index === stateList.length - 1 ? '0' : '10px',
		},
		onclick(event) {
			const evt = event || window.event;
			const stateObject = JSON.parse(JSON.stringify(evt.currentTarget.dataset));
			history.pushState(stateObject, stateObject.title, stateObject.url);
			updateContent(stateObject);
		},
	}));
}

function route(state, index, stateList) {
	if (Array.isArray(state.url)) {
		state.url.forEach((url) => {
			state.title = url || state.name;
			state.url = url;
			route(state, index, stateList);
		}, this);
	} else register(state, index, stateList);
}

function createUI() {
	states.forEach(route, this);
	ui.append($infoBox);
	ui.append($disposeButton);
}

history.one(history.PopStateEvent, (event) => {
	updateContent(event.state);
});

history.onpopstate = (event) => {
	console.log('event.target === window', event.target === window);
	console.log('event.currentTarget === history', event.currentTarget === history);
	console.log('event.currentTarget.length:', event.currentTarget.length);
	console.log('window.history.length:', window.history.length);
	console.log('history.length:', history.length);
};

createUI();
history.replaceState(states[0], states[0].title, states[0].url);
updateContent(states[0]);
