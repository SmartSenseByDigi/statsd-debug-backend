var util = require('util');
var debug;

var flushStats = function debugFlush(ts, metrics) {
  if(debug){
    util.log('debug-backend:[' + ts + ']:' + JSON.stringify(metrics));
  }
};

var backendStatus = function debugStatus(writeCb) {
  if(debug){
    util.log('debug-backend: debug status called');
  }
};

exports.init = function debugInit(startupTime, config, events, logger) {
  if (typeof logger !== 'undefined') {
    util = logger;
  }
  debug = config.debug || false;
  events.on('flush', flushStats);
  events.on('status', backendStatus);
  return true;
};
