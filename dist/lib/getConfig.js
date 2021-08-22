"use strict";
var fs = require("fs");
var logger = require("./logger");
var getConfig = function () {
    if (fs.existsSync("./state/config.json"))
        return JSON.parse(fs.readFileSync("./state/config.json").toString());
    else {
        var message = "FATAL ERROR - NO CONFIG FILE DETECTED";
        logger.error(message);
        throw new Error(message);
    }
};
module.exports = getConfig;
