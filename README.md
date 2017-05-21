# pirate-history
> Handles cross-browser history management

[![npm-fury][npm-fury]][npm-url]
[![license][license]][license-url]
[![fossa][fossa]][fossa-url]

## 🚧 Status

```diff
- ☠ This library is under construction. There's nothing for you here yet. ☠ -
```

| Dependencies                       | Build                                 | Coverage                            |
| :--------------------------------- | :------------------------------------ | :------------------------------------------------ |
| [![deps][deps]][deps-url]          | [![travis][travis]][travis-url]       | [![inch][inch]][inch-url]                         |
| [![devDeps][devDeps]][devDeps-url] | [![circleci][circleci]][circleci-url] | [![codecov][codecov]][codecov-url]                |
| [![depsci][depsci]][depsci-url]    | [![appveyor][appveyor]][appveyor-url] | [![browserstack][browserstack]][browserstack-url] |

## 🏴 Install

### Using [npm](https://www.npmjs.com/package/npm "A package manager for everything")
```bash
npm i pirate-history -S 
```

### Using [bower](https://www.bower.io "A package manager for the web")
```bash
bower i pirate-history -S 
```

## 🏴 History

### :globe_with_meridians: **C**ontent **D**elivery **N**etwork (CDN)

#### :package: concatenated

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.map"></script>
```


#### :fire: minified

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.min.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.min.map"></script>
```


#### :rocket: gzipped

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.min.js.gz
```

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.min.map.gz
```


### :beginner: Get Started

#### Methods

##### :black_circle: `url(location[, replace][, options])`

- **`location`**: 
- **`replace`**: 
- **`options`**: 

Without any argument, this method just returns something like a [URL](https://developer.mozilla.org/en-US/docs/Web/API/Window/URL) object.
Except for your `searchParams` attribute that returns an object not an [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

##### :black_circle: `go(n)`

- **`n`**: The position to the current page (with the current page being relative index 0). _**Default** 0_

##### :black_circle: `back()`

To move backward through history. 

##### :black_circle: `forward()`

To move forward through history.

##### :black_circle: `on(types[, data], handler)`

Add event handlers to the elements in collection. Multiple event types can be passed in a space-separated string, or as an object where event types are keys and handlers are values.
Event handlers are executed in the context of the element to which the handler is attached, or the matching element in case a selector is provided.

##### :black_circle: `one(types[, data], handler)`

Adds an event handler that removes itself the first time it runs, ensuring that the handler only fires once.

##### :black_circle: `off([types][, handler])`

Detach event handlers added with `on()` or `one()`. To detach a specific event handler, the same function must be passed that was used for `on()`.
Otherwise, just calling this method with an event type will detach all handlers of that type.
When called without arguments, it detaches all event handlers registered on current elements.

##### :black_circle: `emit(types[, data])`

Emit the specified event on elements of the collection.


#### Events

##### :white_circle: `push`

##### :white_circle: `replace`

##### :white_circle: `forward`

##### :white_circle: `back`

##### :white_circle: `action`

##### :white_circle: `change`

##### :white_circle: `pop`


## 🏴 Memory (standalone)

### :globe_with_meridians: **C**ontent **D**elivery **N**etwork (CDN)

#### :package: concatenated

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.map"></script>
```


#### :fire: minified

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.min.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.min.map"></script>
```


#### :rocket: gzipped

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.min.js.gz
```

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.memory.min.map.gz
```


### :beginner: Get Started

#### Methods

##### :black_circle: url(location[, replace][, options])

- **`location`**: 
- **`replace`**: 
- **`options`**: 

Without any argument, this method just returns something like a [URL](https://developer.mozilla.org/en-US/docs/Web/API/Window/URL) object.
Except for your `searchParams` attribute that returns an object not an [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

##### :black_circle: go(n)

- **`n`**: The position to the current page (with the current page being relative index 0). _**Default** 0_

##### :black_circle: back()

To move backward through history. 

##### :black_circle: forward()

To move forward through history.


#### Events

##### :white_circle: push

##### :white_circle: replace

##### :white_circle: forward

##### :white_circle: back

##### :white_circle: action

##### :white_circle: change

##### :white_circle: pop


## 🏴 State (standalone)

### :globe_with_meridians: **C**ontent **D**elivery **N**etwork (CDN)

#### :package: concatenated

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.map"></script>
```


#### :fire: minified

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.min.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.min.map"></script>
```


#### :rocket: gzipped

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.min.js.gz
```

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.state.min.map.gz
```


### :beginner: Get Started

#### Methods

##### :black_circle: `pushState(state[, title][, url])`

The `pushState()` method is used to create a new history entry. This method has three parameters:

* `state` – _(required)_ The state object is used to store data that is associated the new history entry. This could include the page title, a URL to load via AJAX or even the page content itself.

* `title` – _(required)_ The title parameter should act as a description for the history entry.

* `url` – _(optional)_ This is the URL that will be associated with the history entry. The browser won’t load this URL when pushState() is called, but will display it in the address bar. It’s worth noting that this URL may be loaded if the user decides to refresh the page or restarts the browser.

```javascript
// Creates a new history entry.
pirate.history.pushState(state, title, url);
```

##### :black_circle: `replaceState(state[, title][, url])`

The `replaceState()` method is similar to `pushState()` in that it takes the same three parameters. However, rather than creating a new history entry,  `replaceState()` updates the current history entry. This can be useful if you want to add some data to your state object after `pushState()` has been called.

```javascript
// Updates the current history entry.
pirate.history.replaceState(state, title, url);
```

Without any argument, this method just returns something like a [URL](https://developer.mozilla.org/en-US/docs/Web/API/Window/URL) object.
Except for your `searchParams` attribute that returns an object not an [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

##### :black_circle: `go(n)`

The `go(n)` method allows you to navigate back or forward n number of places in the session history. To navigate backwards n should be a negative number.

- **`n`**: The position to the current page (with the current page being relative index 0). _**Default** 0_

```javascript
// Go back two entries.
pirate.history.go(-2);

// Go forward 3 entries.
pirate.history.go(3);
```

##### :black_circle: `back()`

Calling the `back()` method will cause the browser to navigate back to the previous entry in the session history. This mimics the behaviour of the browsers native back button.

```javascript
pirate.history.back();
```

##### :black_circle: `forward()`

The `forward()` method will cause the browser to navigate one place forward in the browser history.

```javascript
pirate.history.forward();
```


#### Properties

##### :large_blue_circle: `state`

To retrieve the `state` object for the current history entry you can examine the state property on the `pirate.history` object. This is useful if you need to read the state object when a popstate event has not been fired.

```javascript
pirate.history.state;
```

##### :large_blue_circle: `length`

The history objects `length` property tells you how many entries are in the session history. This can be useful when used in conjunction with the `go()` method.

```javascript
// Go back to the first page.
// (Assuming the you are starting on the last page.)
var moves = pirate.history.length - 1;
pirate.history.go(-moves);
```

#### Events

##### :white_circle: `push`

##### :white_circle: `replace`

##### :white_circle: `forward`

##### :white_circle: `back`

##### :white_circle: `action`

##### :white_circle: `change`

##### :white_circle: `pop`

The `popstate` event is fired on `pirate` when the active history entry changes. Most commonly when the browsers back or forward buttons are clicked (or a call to `back()`, `forward()` or `go()` is executed).

The `event` passed into the listener callback contains a `state` property that is used to retrieve the `state` object that is associated with the history entry.


## 🏴 Hash (standalone)

### :globe_with_meridians: **C**ontent **D**elivery **N**etwork (CDN)

#### :package: concatenated

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.map"></script>
```


#### :fire: minified

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.min.js"></script>
```

```javascript
<script src="https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.min.map"></script>
```


#### :rocket: gzipped

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.min.js.gz
```

```javascript
https://cdn.rawgit.com/adriancmiranda/pirate-history/fcae898e/dist/pirate-history.hash.min.map.gz
```


### :beginner: Get Started

#### Methods

##### :black_circle: `url(location[, replace][, options])`

- **`location`**: 
- **`replace`**: 
- **`options`**: 

Without any argument, this method just returns something like a [URL](https://developer.mozilla.org/en-US/docs/Web/API/Window/URL) object.
Except for your `searchParams` attribute that returns an object not an [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

##### :black_circle: `go(n)`

- **`n`**: The position to the current page (with the current page being relative index 0). _**Default** 0_

##### :black_circle: `back()`

To move backward through history. 

##### :black_circle: `forward()`

To move forward through history.


#### Events

##### :white_circle: `push`

##### :white_circle: `replace`

##### :white_circle: `forward`

##### :white_circle: `back`

##### :white_circle: `action`

##### :white_circle: `change`

##### :white_circle: `pop`

<details><summary>Usage</summary><p>

  ```javascript
  'There is nothing for you here yet.
  ```

</p></details>


## 🏴 What you need to build your own **pirate-history**

In order to build **pirate-history**, you need to have the latest node/npm and git 1.7 or later. Earlier versions might work, but are not supported.

For Windows, you have to download and install [git](http://git-scm.com/downloads) and [node](http://nodejs.org/download/).

OS X users should install [git](http://git-scm.com/download).

Linux/BSD users should use their appropriate package managers to install git and node, or build from source
if you swing that way. Easy-peasy.


## 🏴 How to build your own **pirate-history**
Clone a copy of the main **pirate-history** git repo by running:

```bash
git clone git://github.com/adriancmiranda/pirate-history.git
```

Enter the **pirate-history** directory and run the install script and the build script:

```bash
cd pirate-history && npm i && npm run build
```

The built version of **pirate-history** will be put in the `dist/` subdirectory, along with the internal dependencies, minified copy and associated map file to each one of your parts that should be work apart and also could be used independently.


## 🏴 Support

Questions, proposals, bugs and issues should be reported via the [issue tracker][issue_tracker].


## 🏴 Thanks to

- [BrowserStack](https://www.browserstack.com) for having a list of devices in order to provide us a maximum coverage to the real browsers.
- [GreenKeeper](https://greenkeeper.io) for the real-time monitoring and automatic updates from our npm dependencies.
- [RawGit](https://rawgit.com/) & [StackPath](https://www.stackpath.com/) for the speed up and secure our files with SecureCDN directly from GitHub.

## 🏴 License

[![licenses][licenses]][licenses-url]

<sub>[▴ Back to top](#pirate-history)</sub>

<!-- prerequisites -->

[npm-link]: https://www.npmjs.com/ "npm is the package manager for everything"
[bower-link]: https://bower.io/ "A package manager for the web"


<!-- project links -->

[fork]: https://github.com/adriancmiranda/pirate-history/fork "Fork it"
[pull_request]: https://github.com/adriancmiranda/pirate-history/compare "Pull request"
[issue_tracker]: http://github.com/adriancmiranda/pirate-history/issues "Issue tracker"


<!-- badges -->

[npm-fury]: https://badge.fury.io/js/pirate-history.svg
[npm-shields]: https://img.shields.io/npm/v/pirate-history.svg
[npm-url]: https://npmjs.com/package/pirate-history

[codestyle]: https://david-dm.org/adriancmiranda/pirate-history.svg
[codestyle-url]: https://david-dm.org/adriancmiranda/pirate-history

[codacy]: https://api.codacy.com/project/badge/Grade/3e0f59413b9e466ea528760f857a08db
[codacy-url]: https://www.codacy.com/app/adriancmiranda/pirate-history?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=adriancmiranda/pirate-history&amp;utm_campaign=Badge_Grade

[inch]: https://inch-ci.org/github/adriancmiranda/pirate-history.svg?branch=master
[inch-url]: https://inch-ci.org/github/adriancmiranda/pirate-history

[waffle]: https://img.shields.io/waffle/label/evancohen/smart-mirror/in%20progress.svg
[waffle-url]: https://waffle.io/adriancmiranda/pirate-history

[deps]: https://david-dm.org/adriancmiranda/pirate-history.svg
[deps-url]: https://david-dm.org/adriancmiranda/pirate-history

[devDeps]: https://david-dm.org/adriancmiranda/pirate-history/dev-status.svg
[devDeps-url]: https://david-dm.org/adriancmiranda/pirate-history?type=dev

[circleci]: https://circleci.com/gh/adriancmiranda/pirate-history/tree/master.svg?style=shield
[circleci-url]:  https://circleci.com/gh/adriancmiranda/pirate-history/tree/master

[depsci]: https://dependencyci.com/github/adriancmiranda/pirate-history/badge
[depsci-url]: https://dependencyci.com/github/adriancmiranda/pirate-history

[travis]: https://travis-ci.org/adriancmiranda/pirate-history.svg?branch=master
[travis-url]: https://travis-ci.org/adriancmiranda/pirate-history

[appveyor]: https://ci.appveyor.com/api/projects/status/hucvow1n0t3q3le3/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/adriancmiranda/pirate-history/branch/master

[codecov]: https://codecov.io/gh/adriancmiranda/pirate-history/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/adriancmiranda/pirate-history

[greenkeeper]: https://badges.greenkeeper.io/adriancmiranda/pirate-history.svg
[greenkeeper-url]: https://greenkeeper.io/

[browserstack]: https://www.browserstack.com/automate/badge.svg?badge_key=QXNiZ2dxcmxFVUxQZDRHNUsrNFd3dzl2MUo4TGt1RG8zeTNhRXpXSTl6MD0tLTRpY0JkY2VGdDg0ak9ZTnBzN0tFVXc9PQ==--37f49533fa5db5c89b895d055d6f374c8c8c7346
[browserstack-url]: https://www.browserstack.com

[license]: https://img.shields.io/badge/license-Unlicense-44cc11.svg
[license-url]: https://raw.githubusercontent.com/adriancmiranda/pirate-history/master/LICENSE

[fossa]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fpirate-history.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fpirate-history?ref=badge_shield

[licenses]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fpirate-history.svg?type=large
[licenses-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fpirate-history?ref=badge_large

<!-- https://unpkg.com/pirate-history@0.0.2/dist/ -->
