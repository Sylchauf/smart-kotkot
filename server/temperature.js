const { temperatureInstance } = require("./modules/temperature");
const getConfig = require("../lib/getConfig");
const moment = require("moment");
const fs = require("fs");
const logger = require("../lib/logger");

const config = getConfig();

const fileName = `../state/temperature.log`;

const appendToFile = (temp, hum) => {
  const line = `${moment().toISOString()} ${temp} ${hum}\n`;

  fs.appendFile(fileName, line, clearOldLines);
};

const clearOldLines = () => {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (data) {
      const wantedLines = data.split("\n").slice(-1000); // keep 1k lines
      fs.writeFile(fileName, wantedLines);
    }
  });
};

const getTemperatureAndHumidity = () => {
  logger.info("Get temperature and humidity values");
  const temp = temperatureInstance.getTemperature();
  const hum = temperatureInstance.getHumidity();

  appendToFile(temp, hum);

  setTimeout(() => {
    getTemperatureAndHumidity();
  }, config.temperature.intervalSec * 1000);
};

module.exports.getTemperatureAndHumidity = getTemperatureAndHumidity;
