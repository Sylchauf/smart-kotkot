const findRemoveSync = require("find-remove");
const { CronJob } = require("cron");
const getConfig = require("../lib/getConfig");
const logger = require("../lib/logger");

const config = getConfig();

const cleanOldPicture = () => {
  config.camera.forEach((camera) => {
    if (camera.save?.path && camera.save?.deleteAfterHours) {
      const result = findRemoveSync(camera.save.path, {
        age: { seconds: camera.save.deleteAfterHours * 60 * 60 },
        extensions: [".jpg"],
      });

      logger.info(`[Clean] ${result.length} pictures deleted (${camera.name})`);
    }
  });
};

// Clean old pictures automagically
const setupCleanOldPictures = () => {
  const schedulerCleanPicture = new CronJob(
    "* * * * * *",
    function () {
      cleanOldPicture();
    },
    null
  );
};

module.exports = {
  setupCleanOldPictures,
};
