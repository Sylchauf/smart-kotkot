const config = require("../../state/config.json");
const MotorAbstract = require("./LightAbstract");

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
