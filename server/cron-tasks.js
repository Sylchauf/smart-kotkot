const CronJob = require("cron").CronJob;
const config = require("../state/config.json");
const configStringToTime = require("./lib/configStringToTime");
const axios = require("axios");
const logger = require("../lib/logger");

let cronStatus = {
  jobs: [],
};

// All the scheduled Cronjobs go in here
let coopCronjobs = [];

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
  cronStatus.jobs = [];

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:" + port,
  });

  // Properly unregister/stop the previous cronjobs
  if (coopCronjobs.length > 0) {
    logger.info(`Cronjobs: Unregistering ${coopCronjobs.length} old Cronjobs`);

    coopCronjobs.forEach((cronjob) => {
      cronjob.stop();
      cronjob = null;
    });

    coopCronjobs = [];
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

      cronStatus.jobs.push({
        time:
          (realTime.h < 10 ? "0" : "") +
          realTime.h +
          ":" +
          (realTime.m < 10 ? "0" : "") +
          realTime.m,
        command: newJob.time,
        action: newJob.action,
      });

      // Sort by execution time
      cronStatus.jobs.sort((a, b) => a.time.localeCompare(b.time));

      coopCronjobs.push(
        new CronJob(
          cronPattern,
          function () {
            logger.info(`Cronjob Run - ${newJob.action}`);

            if (newJob.action === "open") axiosInstance.get("/api/door/up");
            else if (newJob.action === "close")
              axiosInstance.get("/api/door/down");
          },
          null,
          true
        )
      );
    } else
      logger.warn(
        `Cronjob Setup failed: ${newJob.action} INVALID CRON PATTERN`
      );
  });
};

module.exports.setupCronjobs = setupCronjobs;
