let lightInstance;

const GCERelay = require("./GCERelay");
const GPIO = require("./GPIO");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

console.log("config.light.module:", config.light.module);

switch (config.light.module) {
  case "GCERelay":
    lightInstance = new GCERelay();
    break;
  case "GPIO":
    lightInstance = new GPIO();
    break;
}

exports.lightInstance = lightInstance;
