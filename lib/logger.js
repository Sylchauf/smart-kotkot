const winston = require("winston");
require("winston-daily-rotate-file");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      timestamp: true,
    })
  );
} else {
  logger.add(
    new winston.transports.DailyRotateFile({
      filename: "logs/%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      timestamp: true,
    })
  );
}

module.exports = logger;
