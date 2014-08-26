var util = require('util');
var Device = require('zetta').Device;

var Arm = module.exports = function() {
  Device.call(this);
};
util.inherits(Arm, Device);

Arm.prototype.init = function(config) {
  config
    .type('arm')
    .state('ready')
    .when('ready', { allow: ['move'] })
    .when('moving', { allow: ['ready'] })
    .map('move', this.move,
        [ { name: 'direction', type: 'radio', value: [ { value: 'up' }, { value: 'down' }] } ])
    .map('ready', this.ready);
};

Arm.prototype.move = function(direction, cb) {
  this.state = 'moving';
  this.call('ready', cb);
};

Arm.prototype.ready = function(cb) {
  this.state = 'ready';
  if (cb) cb();
};
