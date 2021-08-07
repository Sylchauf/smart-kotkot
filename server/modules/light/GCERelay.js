const { exec } = require("child_process");
const config = require("../../../state/config.json");
const LightAbstract = require("./LightAbstract");

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
