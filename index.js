/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Export 'Event'.
 */

module.exports = Event;

/**
 * Expose 'Event' prototype.
 */

var event = Event.prototype;

/**
 * Create a new 'Event'.
 *
 * @param {Function} fn
 * @api public
 */

function Event(fn) {
  if (!(this instanceof Event)) return new Event(fn);
  this._fn = fn;
  this._cbs = [];

  return this;
}

/**
 * Attach a listener.
 *
 * @param {String} event
 * @param {Function} cb
 * @api public
 */

event.on = function(event, cb) {
  assert.equal(typeof event, 'string', 'ensemble: event should be a string');
  assert.equal(typeof cb, 'function', 'ensemble: callback should be a function');

  var obj = {
    event: event,
    fn: cb
  };

  this._cbs.push(obj);
  this._fn.on(event, cb);
}

/**
 * Remove all listeners.
 *
 * @api public
 */

event.removeListeners = function() {
  this._cbs.forEach(function(obj) {
    this._fn.removeListener(obj.event, obj.fn);
  }.bind(this));

  this._cbs = [];
}

/**
 * Aliases.
 */

event.addListener = event.on;
