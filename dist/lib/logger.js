"use strict";
var winston = require("winston");
require("winston-daily-rotate-file");
var logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
            timestamp: true,
        }),
    ],
});
module.exports = logger;
