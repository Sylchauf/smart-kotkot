let temperatureInstance;

const TEMPerHUM = require("./TEMPerHUM");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

switch (config.temperature.module) {
  case "TEMPerHUM":
    temperatureInstance = new TEMPerHUM();
    break;
}

exports.temperatureInstance = temperatureInstance;
