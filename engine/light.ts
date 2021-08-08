import LIGHT_STATE from "../constants/LIGHT_STATE";
import fs from "fs";

// @ts-ignore
import { lightInstance } from "../server/modules/light";
import logger from "../lib/logger";

const initialState = {
  state: LIGHT_STATE.OFF,
};

const filePathState = "state/lightState.json";
const lightState = fs.existsSync(filePathState)
  ? JSON.parse(fs.readFileSync(filePathState).toString())
  : initialState;

const setLightState = (key: string, value: string) => {
  lightState[key] = value;

  fs.writeFileSync(filePathState, JSON.stringify(lightState));
};

const makeResponse = (status: number, message: string, logType = "info") => {
  const response = {
    status,
    message,
  };

  // @ts-ignore
  logger[logType](message);

  return response;
};

const switchLight = (state: string) => {
  if (state !== LIGHT_STATE.ON && state !== LIGHT_STATE.OFF)
    return makeResponse(400, "[Light] Invalid parameter (on/off)", "warn");

  if (state === LIGHT_STATE.ON && lightState.state === LIGHT_STATE.ON)
    return makeResponse(
      409,
      "[Light] You ask to switch on the light : it's already on",
      "warn"
    );

  if (state === LIGHT_STATE.OFF && lightState.state === LIGHT_STATE.OFF)
    return makeResponse(
      409,
      "[Light] You ask to switch off the light : it's already off",
      "warn"
    );

  if (state === LIGHT_STATE.ON) {
    // @ts-ignore
    lightInstance.turnOn();
  } else if (state === LIGHT_STATE.OFF) {
    // @ts-ignore
    lightInstance.turnOff();
  }

  setLightState("state", state);

  return makeResponse(200, `[Light] Switch the light ${state}`);
};

export { switchLight, lightState };
