let temperatureInstance;

const TEMPerHUM = require("./TEMPerHUM");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

console.log('onfig.temperature.module:', config.temperature.module)

switch (config.temperature.module) {
  case "TEMPerHUM":
    temperatureInstance = new TEMPerHUM();
    break;
}

exports.temperatureInstance = temperatureInstance;
