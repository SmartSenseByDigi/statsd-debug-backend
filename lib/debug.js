var util = require('util');

var flushStats = function debugFlush(ts, metrics) {
  util.log('debug-backend:[' + ts + ']:' + JSON.stringify(metrics));
};

var backendStatus = function debugStatus(writeCb) {
  util.log('debug-backend: debug status called');
};

exports.init = function debugInit(startupTime, config, events, logger) {
  if (typeof logger !== 'undefined') {
    util = logger;
  }
  events.on('flush', flushStats);
  events.on('status', backendStatus);
  return true;
};
