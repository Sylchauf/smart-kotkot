const getConfig = require("../../../lib/getConfig");

let motorInstance;

const config = getConfig();

const GCERelay = require("./GCERelay");
const GPIO = require("./GPIO");

switch (config.door.module) {
  case "GCERelay":
    motorInstance = new GCERelay();
    break;
  case "GPIO":
    motorInstance = new GPIO();
    break;
}

export { motorInstance };
