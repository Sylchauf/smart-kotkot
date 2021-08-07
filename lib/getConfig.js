const fs = require("fs");
const logger = require("./logger");

const getConfig = () => {
  if (fs.existsSync("./state/config.json"))
    return JSON.parse(fs.readFileSync("./state/config.json").toString());
  else {
    const message = "FATAL ERROR - NO CONFIG FILE DETECTED";
    logger.error(message);
    throw new Error(message);
  }
};

module.exports = getConfig;
