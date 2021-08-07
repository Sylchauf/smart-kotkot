let motorInstance;

const config = require("../../state/config.json");

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
