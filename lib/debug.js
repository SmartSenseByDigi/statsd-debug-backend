var util = require('util');
var debug;

var flushStats = function debugFlush(ts, metrics) {
  if(debug){
    util.log('DEBUG:debug-backend:[' + ts + ']:' + JSON.stringify(metrics));
  }
};

var backendStatus = function debugStatus(writeCb) {
  if(debug){
    util.log('DEBUG:debug-backend: debug status called');
  }
};

exports.init = function debugInit(startupTime, config, events, logger) {
  if (typeof logger !== 'undefined') {
    util = logger;
  }
  debug = config.debug || false;
  if(debug){
    util.log('DEBUG:debug-backend: configuration = ' + JSON.stringify(config));
  }
  util.log('INFO:debug-backend: Loading debug backend...')
  events.on('flush', flushStats);
  events.on('status', backendStatus);
  util.log('INFO:debug-backend: Loaded debug backend.')
  return true;
};
