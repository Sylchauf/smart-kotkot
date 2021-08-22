const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { setupCronjobs } = require("./server/cron-tasks");
const { setupCleanOldPictures } = require("./server/cleanPictures");
const { initializeCameras } = require("./server/camera");
const { getTemperatureAndHumidity } = require("./server/temperature");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

global.PORT = process.env.PORT || 3000;
global.ROOT_URL = process.env.ROOT_URL || `http://127.0.0.1:${global.PORT}`;

// Declare all global variable used
global.cameraList = {};
global.cronJobs = [];

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  }).listen(Number(global.PORT), (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
    console.log("Server path", process.cwd());

    setupCronjobs();
    initializeCameras();
    getTemperatureAndHumidity();
    setupCleanOldPictures();
  });
});
