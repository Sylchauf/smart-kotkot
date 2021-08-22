"use strict";
var CronJob = require("cron").CronJob;
var configStringToTime = require("./lib/configStringToTime");
var axios = require("axios");
var logger = require("../lib/logger");
var getConfig = require("../lib/getConfig");
var config = getConfig();
var schedulerCronjob = new CronJob("0 1 0 * * *", function () {
    // This Job will run at 00:01 every night and reschedule all cronjobs.
    // This is necessary to keep sunrise/-set based cronjobs up to date.
    logger.info("Cronjobs: Nightly rescheduling");
    setupCronjobs();
}, null);
schedulerCronjob.start();
var setupCronjobs = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var axiosInstance = axios.create({
        baseURL: global.ROOT_URL,
    });
    // Properly unregister/stop the previous cronjobs
    if (global.cronJobs.length > 0) {
        logger.info("Cronjobs: Unregistering " + global.cronJobs.length + " old Cronjobs");
        global.cronJobs.forEach(function (cronjob) {
            cronjob.stop();
            cronjob = null;
        });
        global.cronJobs = [];
    }
    logger.info("Cronjobs: Set up Setup Cronjobs");
    var cronjobsToConfigure = [];
    if ((_b = (_a = config.door) === null || _a === void 0 ? void 0 : _a.automation) === null || _b === void 0 ? void 0 : _b.openTimes)
        config.door.automation.openTimes.forEach(function (openingTime) {
            cronjobsToConfigure.push({
                action: "open",
                time: openingTime,
            });
        });
    if ((_d = (_c = config.door) === null || _c === void 0 ? void 0 : _c.automation) === null || _d === void 0 ? void 0 : _d.closeTimes)
        config.door.automation.closeTimes.forEach(function (closingTime) {
            cronjobsToConfigure.push({
                action: "close",
                time: closingTime,
            });
        });
    if ((_f = (_e = config.light) === null || _e === void 0 ? void 0 : _e.automation) === null || _f === void 0 ? void 0 : _f.offTimes)
        config.light.automation.offTimes.forEach(function (time) {
            cronjobsToConfigure.push({
                action: "light_off",
                time: time,
            });
        });
    if ((_h = (_g = config.light) === null || _g === void 0 ? void 0 : _g.automation) === null || _h === void 0 ? void 0 : _h.onTimes)
        config.light.automation.onTimes.forEach(function (time) {
            cronjobsToConfigure.push({
                action: "light_on",
                time: time,
            });
        });
    cronjobsToConfigure.forEach(function (newJob) {
        var realTime = configStringToTime(newJob.time);
        if (realTime.h !== null && realTime.m !== null) {
            var cronPattern = "0 " + realTime.m + " " + realTime.h + " * * *";
            /*                ┬ ┬    ┬    ┬ ┬ ┬
                                     │ │    │    │ │ └── Day of Week: 0-6 (Sun-Sat)
                                     │ │    │    │ └──── Months: 0-11 (Jan-Dec)
                                     │ │    │    └────── Day of Month: 1-31
                                     │ │    └─────────── Hours: 0-23
                                     │ └──────────────── Minutes: 0-59
                                     └────────────────── Seconds: 0-59 */
            logger.info("Cronjob Scheduling " +
                cronPattern.padEnd(15) +
                newJob.action.padEnd(6) +
                " up for " +
                (realTime.h < 10 ? "0" : "") +
                realTime.h +
                ":" +
                (realTime.m < 10 ? "0" : "") +
                realTime.m +
                " - " +
                newJob.time);
            var thisCron = new CronJob(cronPattern, function () {
                logger.info("Cronjob Run - " + newJob.action);
                if (newJob.action === "open")
                    axiosInstance.get("/api/door/up");
                else if (newJob.action === "close")
                    axiosInstance.get("/api/door/down");
                else if (newJob.action === "light_on")
                    axiosInstance.get("/api/light/on");
                else if (newJob.action === "light_off")
                    axiosInstance.get("/api/light/off");
            }, null, true);
            thisCron.action = newJob.action;
            global.cronJobs.push(thisCron);
        }
        else
            logger.warn("Cronjob Setup failed: " + newJob.action + " INVALID CRON PATTERN");
    });
};
module.exports.setupCronjobs = setupCronjobs;
