/* eslint-disable */
var history = require('index');
var routes = require('./routes');
var UI = require('./ui');

var ui = new UI('#fixture');
var info = ui.prepend(ui.createElement('pre', {
	innerHTML: 'Content',
	style: {
		color: '#333',
		marginBottom: '10px',
	},
}));

function state(route, index, routes) {
	if (Array.isArray(route.url)) {
		return route.url.forEach(function (url) {
			route.title = url || route.name;
			route.url = url;
			state(route, index, routes);
		}, this);
	}
	register(route, index, routes);
}

function register(route, index, routes) {
	ui.append(ui.createButton({
		dataset: route,
		value: route.title,
		style: {
			marginRight: index === routes.length - 1 ? '0': '10px',
		},
		onclick: function (event) {
			var route = JSON.parse(JSON.stringify(this.dataset));
			history.pushState(route.state, route.title, route.url);
			info.innerHTML = [route.content, 'url: ' + route.url].join(' ');
		},
	}));
}

history.onpopstate = function (event) {
	console.log('history.onpopstate:', event);
};

history.onhashchange = function (event) {
	console.log('history.onhashchange:', event);
};

routes.forEach(state, this);
