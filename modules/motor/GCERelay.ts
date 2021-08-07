const { exec } = require("child_process");
const config = require("../../state/config.json");
const MotorAbstract = require("./MotorAbstract");

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
