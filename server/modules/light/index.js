let lightInstance;

const GCERelay = require("./GCERelay");
const GPIO = require("./GPIO");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

switch (config.light.module) {
  case "GCERelay":
    lightInstance = new GCERelay();
    break;
  case "GPIO":
    lightInstance = new GPIO();
    break;
}

exports.motorInstance = lightInstance;
