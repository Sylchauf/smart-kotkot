"use strict";
var findRemoveSync = require("find-remove");
var CronJob = require("cron").CronJob;
var getConfig = require("../lib/getConfig");
var logger = require("../lib/logger");
var config = getConfig();
var cleanOldPicture = function () {
    config.camera.forEach(function (camera) {
        var _a, _b;
        if (((_a = camera.save) === null || _a === void 0 ? void 0 : _a.path) && ((_b = camera.save) === null || _b === void 0 ? void 0 : _b.deleteAfterHours)) {
            var result = findRemoveSync(camera.save.path, {
                age: { seconds: camera.save.deleteAfterHours * 60 * 60 },
                extensions: [".jpg"],
            });
            logger.info("[Clean] " + Object.keys(result).length + " pictures deleted (" + camera.name + ")");
        }
    });
};
// Clean old pictures automagically
var setupCleanOldPictures = function () {
    logger.info("[Cronjobs] Set up cron to clean old images");
    var schedulerCleanPicture = new CronJob("0 * * * * *", function () {
        cleanOldPicture();
    }, null);
    schedulerCleanPicture.start();
};
module.exports = {
    setupCleanOldPictures: setupCleanOldPictures,
};
