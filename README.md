# ensemble
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

Event listener orchestration. Makes it easy to bulk unbind listeners that were
set withing a context. This is especially useful for unmounting listeners in
React's `componentWillUnmount` lifecycle event.

## Installation
```bash
$ npm i --save ensemble
```

## Overview
```js
var Emitter = require('events').EventEmitter;
var ensemble = require('ensemble');

/**
 * Wrap an event emitter.
 */

var emitter = ensemble(new Emitter);

/**
 * Attach listeners to the emitter.
 */

emitter.on('foo', function() {});

/**
 * Remove all listeners registered
 * in the wrapper from the emitter.
 */

emitter.removeListeners()
```

## API
#### var emitter = ensemble(Emitter)
Wrap an event emitter in an ensemble object.
```js
var Emitter = require('events').EventEmitter;
var ensemble = require('ensemble');

var myEmitter = ensemble(new Emitter);
```

#### .on(event, cb)
Attach an event listener to the wrapped emitter. Behaves identical to Node's
built in listener function.
```js
myEmitter.on('some_event', function(val) {
  console.log(val);
});
```

#### .removeListeners()
Remove all listeners that were attached within this context to the emitter.
```js
myEmitter.removeListeners();
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/ensemble.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ensemble
[travis-image]: https://img.shields.io/travis/yoshuawuyts/ensemble.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/ensemble
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/ensemble.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/ensemble?branch=master
[david-image]: http://img.shields.io/david/yoshuawuyts/ensemble.svg?style=flat-square
[david-url]: https://david-dm.org/yoshuawuyts/ensemble
[downloads-image]: http://img.shields.io/npm/dm/ensemble.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/ensemble
