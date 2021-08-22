var getConfig = require("../../../lib/getConfig");
var motorInstance;
var config = getConfig();
var GCERelay = require("./GCERelay");
var GPIO = require("./GPIO");
switch (config.door.module) {
    case "GCERelay":
        motorInstance = new GCERelay();
        break;
    case "GPIO":
        motorInstance = new GPIO();
        break;
}
export { motorInstance };
