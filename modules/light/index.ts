let lightInstance;

const config = require('../../state/config.json');

const GCERelay = require('./GCERelay')
const GPIO = require('./GPIO')

switch (config.light.module) {
  case 'GCERelay':
    lightInstance = new GCERelay();
    break
  case 'GPIO':
    lightInstance = new GPIO();
    break
}

exports.motorInstance = lightInstance
