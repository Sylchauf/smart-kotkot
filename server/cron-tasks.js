const CronJob = require("cron").CronJob;
const configStringToTime = require("./lib/configStringToTime");
const axios = require("axios");
const logger = require("../lib/logger");
const getConfig = require("../lib/getConfig");

const config = getConfig();

const schedulerCronjob = new CronJob(
  "0 1 0 * * *",
  function () {
    // This Job will run at 00:01 every night and reschedule all cronjobs.
    // This is necessary to keep sunrise/-set based cronjobs up to date.
    logger.info("Cronjobs: Nightly rescheduling");
    setupCronjobs();
  },
  null
);

schedulerCronjob.start();

const setupCronjobs = (port) => {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:" + port,
  });

  // Properly unregister/stop the previous cronjobs
  if (global.cronJobs.length > 0) {
    logger.info(
      `Cronjobs: Unregistering ${global.cronJobs.length} old Cronjobs`
    );

    global.cronJobs.forEach((cronjob) => {
      cronjob.stop();
      cronjob = null;
    });

    global.cronJobs = [];
  }

  logger.info("Cronjobs: Set up Setup Cronjobs");
  let cronjobsToConfigure = [];

  if (config.door?.automation?.openTimes)
    config.door.automation.openTimes.forEach((openingTime) => {
      cronjobsToConfigure.push({
        action: "open",
        time: openingTime,
      });
    });

  if (config.door?.automation?.closeTimes)
    config.door.automation.closeTimes.forEach((closingTime) => {
      cronjobsToConfigure.push({
        action: "close",
        time: closingTime,
      });
    });

  if (config.light?.automation?.off)
    config.light.automation.off.forEach((time) => {
      cronjobsToConfigure.push({
        action: "light_off",
        time: time,
      });
    });

  if (config.light?.automation?.on)
    config.light.automation.on.forEach((time) => {
      cronjobsToConfigure.push({
        action: "light_on",
        time: time,
      });
    });

  cronjobsToConfigure.forEach((newJob) => {
    const realTime = configStringToTime(newJob.time);

    if (realTime.h !== null && realTime.m !== null) {
      const cronPattern = `0 ${realTime.m} ${realTime.h} * * *`;
      /*                ┬ ┬    ┬    ┬ ┬ ┬
                               │ │    │    │ │ └── Day of Week: 0-6 (Sun-Sat)
                               │ │    │    │ └──── Months: 0-11 (Jan-Dec)
                               │ │    │    └────── Day of Month: 1-31
                               │ │    └─────────── Hours: 0-23
                               │ └──────────────── Minutes: 0-59
                               └────────────────── Seconds: 0-59 */
      logger.info(
        "Cronjob Scheduling " +
          cronPattern.padEnd(15) +
          newJob.action.padEnd(6) +
          " up for " +
          (realTime.h < 10 ? "0" : "") +
          realTime.h +
          ":" +
          (realTime.m < 10 ? "0" : "") +
          realTime.m +
          " - " +
          newJob.time
      );

      const thisCron = new CronJob(
        cronPattern,
        function () {
          logger.info(`Cronjob Run - ${newJob.action}`);

          if (newJob.action === "open") axiosInstance.get("/api/door/up");
          else if (newJob.action === "close")
            axiosInstance.get("/api/door/down");
        },
        null,
        true
      );
      thisCron.action = newJob.action;

      global.cronJobs.push(thisCron);
    } else
      logger.warn(
        `Cronjob Setup failed: ${newJob.action} INVALID CRON PATTERN`
      );
  });
};

module.exports.setupCronjobs = setupCronjobs;
