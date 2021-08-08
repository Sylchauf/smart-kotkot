const { exec } = require("child_process");
const LightAbstract = require("./LightAbstract");
const getConfig = require("../../../lib/getConfig");
const config = getConfig();

class GCERelay extends LightAbstract {
  device;

  constructor() {
    super();

    this.device = config.light.options?.device || "/dev/ttyUSB0";
  }

  async turnOn() {
    exec(
      `echo RLY${config.light.options.pin}${
        config.light.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
  }

  async turnOff() {
    exec(
      `echo RLY${config.light.options.pin}${
        !config.light.options.activateWhen ? "1" : "0"
      } > ${this.device}`
    );
  }
}

module.exports = GCERelay;
