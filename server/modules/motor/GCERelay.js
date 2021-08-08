const { exec } = require("child_process");
const MotorAbstract = require("./MotorAbstract");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

class GCERelay extends MotorAbstract {
  device;

  constructor() {
    super();

    this.device = config.door.options?.device || "/dev/ttyUSB0";
  }

  async moveUp() {
    exec(
      `echo RLY${config.door.options.upPin}${
        config.door.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
    exec(
      `echo RLY${config.door.options.downPin}${
        !config.door.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
  }

  async moveDown() {
    exec(
      `echo RLY${config.door.options.upPin}${
        !config.door.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
    exec(
      `echo RLY${config.door.options.downPin}${
        config.door.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
  }

  async stop() {
    exec(
      `echo RLY${config.door.options.upPin}${
        config.door.options.activateWhen ? "0" : "1"
      } > ${this.device}`
    );
    exec(
      `echo RLY${config.door.options.downPin}${
        config.door.options.activateWhen ? "0" : "1"
      } > ${this.device}`
    );
  }
}

module.exports = GCERelay;
