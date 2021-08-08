const TemperatureAbstract = require("./TemperatureAbstract");

const { execSync } = require("child_process");

class TEMPerHUM extends TemperatureAbstract {
  constructor() {
    super();

    this.arch = execSync("uname -m");
    this.bin = `temper-${this.arch}`;
  }
  async getTemperature() {
    const result = execSync(`bin/${this.bin}`);

    console.log('result:', result)

    return String(result).split(" ")[0];
  }

  async getHumidity() {
    const result = execSync(`bin/${this.bin}`);

    return String(result).split(" ")[1];
  }
}

module.exports = TEMPerHUM;
