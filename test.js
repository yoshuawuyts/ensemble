/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var Emitter = require('events').EventEmitter;
var ensemble = require('./index');

/**
 * Test
 */

describe('ensemble()', function() {
  it('should wrap an event emitter', function() {
    var emitter = ensemble(new Emitter);

    emitter._fn.should.be.type('object');
    emitter._fn.on.should.be.type('function');
  });
});

describe('.on', function() {
  it('should assert argument types', function() {
    var emitter = ensemble(new Emitter);
    emitter.on.bind(emitter, 123)
      .should.throw('ensemble: event should be a string');

    emitter.on.bind(emitter, 'foo', 123)
      .should.throw('ensemble: callback should be a function');
  });

  it('should save listeners', function() {
    var emitter = ensemble(new Emitter);

    emitter.on('foo', function() {return 'foo'});
    emitter.on('bar', function() {return 'bar'});

    emitter._cbs[0].fn().should.eql('foo');
    emitter._cbs[1].fn().should.eql('bar');
  });
});

describe('.addListener', function() {
  it('should be an alias to .on', function() {
    var emitter = ensemble(new Emitter);
    emitter.on.should.eql(emitter.addListener);
  });
});

describe('.removeListeners', function() {
  it('should remove listeners bound to the ctx', function(done) {
    var store = new Emitter;
    var emitter = ensemble(store);
    var count = 0;

    store.on('baz', function() {done()});
    emitter.on('foo', function() {});
    emitter.on('bar', function() {});

    emitter._cbs.length.should.eql(2);
    Object.keys(store._events).length.should.eql(3);

    emitter.removeListeners();
    Object.keys(store._events).length.should.eql(1);
    store.emit('baz');
  });
});
