const MotorAbstract = require("./LightAbstract");
const getConfig = require("../../../lib/getConfig");
const config = getConfig();

class GPIO extends MotorAbstract {
  gpio;
  pin;

  constructor() {
    super();

    this.gpio = require("onoff").Gpio;
    this.pin = new Gpio(config.light.options.pin, "high");
  }

  async turnOn() {
    this.pin.writeSync(config.door.options.activateWhen ? "1" : "0");
  }

  async turnOff() {
    this.pin.writeSync(!config.door.options.activateWhen ? "1" : "0");
  }
}

module.exports = GPIO;
