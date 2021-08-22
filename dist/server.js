"use strict";
var createServer = require("http").createServer;
var parse = require("url").parse;
var next = require("next");
var setupCronjobs = require("./server/cron-tasks").setupCronjobs;
var setupCleanOldPictures = require("./server/cleanPictures").setupCleanOldPictures;
var initializeCameras = require("./server/camera").initializeCameras;
var getTemperatureAndHumidity = require("./server/temperature").getTemperatureAndHumidity;
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev: dev });
var handle = app.getRequestHandler();
global.PORT = process.env.PORT || 3000;
global.ROOT_URL = process.env.ROOT_URL || "http://127.0.0.1:" + global.PORT;
// Declare all global variable used
global.cameraList = {};
global.cronJobs = [];
app.prepare().then(function () {
    createServer(function (req, res) {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        var parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(Number(global.PORT), function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:3000");
        console.log("Server path", process.cwd());
        setupCronjobs();
        initializeCameras();
        getTemperatureAndHumidity();
        setupCleanOldPictures();
    });
});
