"use strict";
var lightInstance;
var GCERelay = require("./GCERelay");
var GPIO = require("./GPIO");
var getConfig = require("../../../lib/getConfig");
var config = getConfig();
switch (config.light.module) {
    case "GCERelay":
        lightInstance = new GCERelay();
        break;
    case "GPIO":
        lightInstance = new GPIO();
        break;
}
exports.lightInstance = lightInstance;
