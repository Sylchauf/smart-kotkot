const MotorAbstract = require("./MotorAbstract");
const getConfig = require("../../../lib/getConfig");

const config = getConfig();

class GPIO extends MotorAbstract {
  gpio;
  pinUp;
  pinDown;

  constructor() {
    super();

    this.gpio = require("onoff").Gpio;
    this.pinUp = new Gpio(config.door.options.upPin, "high");
    this.pinDown = new Gpio(config.door.options.downPin, "high");
  }

  async moveUp() {
    this.pinUp.writeSync(config.door.options.activateWhen ? "1" : "0");
    this.pinDown.writeSync(!config.door.options.activateWhen ? "1" : "0");
  }

  async moveDown() {
    this.pinUp.writeSync(!config.door.options.activateWhen ? "1" : "0");
    this.pinDown.writeSync(config.door.options.activateWhen ? "1" : "0");
  }

  async stop() {
    this.pinUp.writeSync(config.door.options.activateWhen ? "0" : "1");
    this.pinDown.writeSync(config.door.options.activateWhen ? "0" : "1");
  }
}

module.exports = GPIO;
