/* eslint-disable */
var history = require('index');
var states = require('./states');
var UI = require('./ui');

var ui = new UI('#fixture');
var log = ui.createInput({
	type: 'textarea',
	value: 'hasStateList: ' + history.hasStateList,
	readOnly: true,
	style: {
		marginTop: '10px',
		display: 'block',
		width: '100%',
	},
});
var removeAllEvents = ui.createButton({
	value: 'remove all events',
	style: {
		marginTop: '10px',
	},
	onclick: function () {
		history.removeEventListener();
	},
});
var section = ui.prepend(ui.createElement('pre', {
	style: {
		color: '#333',
		marginBottom: '10px',
	},
}));

function updateContent(state) {
	document.title = state.title;
	section.innerHTML = [state.template, 'url: ' + state.url].join('<br>');
}

function route(state, index, states) {
	if (Array.isArray(state.url)) {
		return state.url.forEach(function (url) {
			state.title = url || state.name;
			state.url = url;
			route(state, index, states);
		}, this);
	}
	register(state, index, states);
}

function register(state, index, states) {
	ui.append(ui.createButton({
		dataset: state,
		value: state.title,
		style: {
			marginRight: index === states.length - 1 ? '0': '10px',
		},
		onclick: function (event) {
			var evt = event || window.event;
			var state = JSON.parse(JSON.stringify(evt.currentTarget.dataset));
			history.pushState(state, state.title, state.url);
			updateContent(state);
		},
	}));
}

history.addEventListener(history.PopStateEvent, function (event) {
	updateContent(event.state);
});

history.onpopstate = function (event) {
	console.log('event.target === window', event.target === window);
	console.log('event.currentTarget === history', event.currentTarget === history);
	console.log('event.currentTarget.length:', event.currentTarget.length);
	console.log('window.history.length:', window.history.length);
	console.log('history.length:', history.length);
};

states.forEach(route, this);
ui.append(log);
ui.append(removeAllEvents);

history.replaceState(states[0], states[0].title, states[0].url);
updateContent(states[0]);
