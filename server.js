const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { setupCronjobs } = require("./server/cron-tasks");
const { initializeCameras, getJpg } = require("./server/camera");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// Declare all global variable used
global.cameraList = {};
global.cronJobs = [];

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  }).listen(Number(PORT), (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");

    setupCronjobs(PORT);
    initializeCameras();
    getJpg();
  });
});
