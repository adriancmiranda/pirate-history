## Usage:

## :black_circle: [Extension] The `memory` method

```javascript
pirate.history.memory({
});
```


## :black_circle: [Extension] The `list` method

```javascript
pirate.history.list({
});
```


## :black_circle: [Extension] The `flush` method

```javascript
pirate.history.flush({
  storage: true,
  params: true,
  memory: true,
  state: true,
  hash: true,
});
```

## :black_circle: [Extension] The `init` event

```javascript
function onInit(event) {
  var state = event.state;
}
pirate.history.addEventListener('init', onInit);
pirate.history.removeEventListener('init', onInit);
pirate.history.dispatchEvent('init', onInit);
```


## :large_blue_circle: [Polyfill/Wrapper] The `popstate` event

The `popstate` event is fired on `pirate` when the active history entry changes. Most commonly when the browsers back or forward buttons are clicked (or a call to `back()`, `forward()` or `go()` is executed).

The `event` passed into the listener callback contains a state property that is used to retrieve the state object that is associated with the history entry.

```javascript
function onPopState(event) {
  var state = event.state;
}
pirate.history.addEventListener('popstate', onPopState);
pirate.history.removeEventListener('popstate', onPopState);
pirate.history.dispatchEvent('popstate', onPopState);
```


## :black_circle: [Extension] The `change` event

```javascript
function onChanged(event) {
  var state = event.state;
}
pirate.history.addEventListener('change', onChanged);
pirate.history.removeEventListener('change', onChanged);
pirate.history.dispatchEvent('change', onChanged);
```


## :large_blue_circle: [Polyfill/Wrapper] The `state` property

To retrieve the `state` object for the current history entry you can examine the state property on the `pirate.history` object. This is useful if you need to read the state object when a popstate event has not been fired.

```javascript
pirate.history.state;
```


## :large_blue_circle: [Polyfill/Wrapper] The `length` property

The history objects `length` property tells you how many entries are in the session history. This can be useful when used in conjunction with the `go()` method.

```javascript
// Go back to the first page.
// (Assuming the you are starting on the last page.)
var moves = pirate.history.length - 1;
pirate.history.go(-moves);
```


## :large_blue_circle: [Polyfill/Wrapper] The `pushState()` method

The `pushState()` method is used to create a new history entry. This method has three parameters:

* `state` – _(required)_ The state object is used to store data that is associated the new history entry. This could include the page title, a URL to load via AJAX or even the page content itself.

* `title` – _(required)_ The title parameter should act as a description for the history entry.

* `URL` – _(optional)_ This is the URL that will be associated with the history entry. The browser won’t load this URL when pushState() is called, but will display it in the address bar. It’s worth noting that this URL may be loaded if the user decides to refresh the page or restarts the browser.

```javascript
// Creates a new history entry.
pirate.history.pushState(state, title, URL);
```


## :large_blue_circle: [Polyfill/Wrapper] The `replaceState()` method

The `replaceState()` method is similar to `pushState()` in that it takes the same three parameters. However, rather than creating a new history entry,  `replaceState()` updates the current history entry. This can be useful if you want to add some data to your state object after `pushState()` has been called.

```javascript
// Updates the current history entry.
```


## :large_blue_circle: [Polyfill/Wrapper] The `back()` method

Calling the `back()` method will cause the browser to navigate back to the previous entry in the session history. This mimics the behaviour of the browsers native back button.

```javascript
pirate.history.back();
```


## :large_blue_circle: [Polyfill/Wrapper] The `forward()` method

The `forward()` method will cause the browser to navigate one place forward in the browser history.

```javascript
pirate.history.forward();
```


## :large_blue_circle: [Polyfill/Wrapper] The `go(n)` method

The `go(n)` method allows you to navigate back or forward n number of places in the session history. To navigate backwards n should be a negative number.

```javascript
// Go back two entries.
pirate.history.go(-2);

// Go forward 3 entries.
pirate.history.go(3);
```


# Browser Support

Should works in all browsers.
