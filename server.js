var zetta = require('zetta');
var alert = require('./alert');
var Arm = require('./arm');
var Heartbeat = require('./heartbeat');
var LED = require('./led');
var Screen = require('./screen');

zetta()
  .use(Heartbeat)
  .use(LED)
  .use(Screen)
  .use(Arm)
  .load(alert)
  .listen(process.env.PORT || 1337);
