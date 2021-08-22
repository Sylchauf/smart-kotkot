"use strict";
var moment = require("moment");
var SunCalc = require("suncalc");
var getConfig = require("../../lib/getConfig");
var config = getConfig();
var configStringToTime = function (configString) {
    // Try to convert the string to an actual time to plan the cronjob for
    var regexTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
    var regexSun = /^(sunrise|sunriseEnd|goldenHourEnd|solarNoon|goldenHour|sunsetStart|sunset|dusk|nauticalDusk|night|nadir|nightEnd|nauticalDawn|dawn)([+-]\d+)$/i;
    var found;
    if ((found = configString.match(regexTime))) {
        // Is it a simple time? 00-23:00:59
        return { h: parseInt(found[1]), m: parseInt(found[2]) };
    }
    else if ((found = configString.match(regexSun))) {
        // Is it a suncalc offset?
        var suncalcObj = found[1]; // Which Suncalc Object is required (e.g. sunset, sunrise)
        var offsetMin = parseInt(found[2]); // The minute offset
        if (!isNaN(config.location.lat) && !isNaN(config.location.lon)) {
            // Get the Date for the required Suncalc Parameter
            var suncalcObjDate = SunCalc.getTimes(new Date(), config.location.lat, config.location.lon)[suncalcObj];
            // Add the offset, convert it to local time
            var actionDate = moment(suncalcObjDate)
                .add(offsetMin, "minutes")
                .local();
            // Only process if the actionDate actually makes sense
            if (actionDate.isValid()) {
                return { h: actionDate.format("H"), m: actionDate.format("m") };
            }
            else
                throw new Error("Cronjob Setup failed. Could not determine Suncalc-Date. Invalid Location?");
        }
        else
            throw new Error("Cronjob Setup failed. Please specificy location.lat and .lon in the config to use sun related timings");
    }
    throw new Error("Cronjob Setup failed. Invalid time " + configString);
};
module.exports = configStringToTime;
