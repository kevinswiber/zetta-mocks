var util = require('util');
var Device = require('zetta').Device;

var Screen = module.exports = function() {
  this.message = null;
  Device.call(this);
};
util.inherits(Screen, Device);

Screen.prototype.init = function(config) {
  config
    .type('screen')
    .state('ready')
    .monitor('message')
    .when('ready', { allow: ['change'] })
    .map('change', this.change, [ { name: 'message' } ]);
};

Screen.prototype.change = function(message, cb) {
  this.message = message;
  cb();
};
