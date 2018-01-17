var util = require('util');

var flushStats = function debugFlush(ts, metrics) {
  util.log('debug-backend:[' + ts + ']:' + metrics);
};

var backendStatus = function debugStatus(writeCb) {
  util.log('debug-backend: debug status called');
};

function debugInit(startupTime, config, events, logger) {
  if (typeof logger !== 'undefined') {
    util = logger;
  }
  events.on('flush', debugFlush);
  events.on('status', debugStatus);
  return true;
};
