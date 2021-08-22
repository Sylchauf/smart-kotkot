"use strict";
var temperatureInstance;
var TEMPerHUM = require("./TEMPerHUM");
var getConfig = require("../../../lib/getConfig");
var config = getConfig();
switch (config.temperature.module) {
    case "TEMPerHUM":
        temperatureInstance = new TEMPerHUM();
        break;
}
exports.temperatureInstance = temperatureInstance;
