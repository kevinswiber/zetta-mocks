var zetta = require('zetta');
var AutoScout = require('zetta-auto-scout');
var alert = require('./alert');
var Arm = require('./arm');
var Heartbeat = require('./heartbeat');
var LED = require('./led');
var Screen = require('./screen');

var HeartbeatScout = new AutoScout('heartbeat', Heartbeat);
var LEDScout = new AutoScout('led', LED);
var ScreenScout = new AutoScout('screen', Screen);
var ArmScout = new AutoScout('arm', Arm);

zetta()
  .use(HeartbeatScout)
  .use(LEDScout)
  .use(ScreenScout)
  .use(ArmScout)
  //.load(alert)
  .link('http://localhost:3004')
  .listen(process.env.PORT || 1337);
