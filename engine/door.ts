import config from "../state/config.json";
import DOOR_STATE from "../constants/DOOR_STATE";
import DOOR_DIRECTION from "../constants/DOOR_DIRECTION";
import fs from "fs";

import { motorInstance } from "../server/modules/motor";
import logger from "../lib/logger";

const status = {
  status: "stop",
  previousStatus: "stop",
};

const initialState = {
  durationUpSec: 0,
  durationDownSec: 0,
  state: DOOR_STATE.BOTTOM,
};

const filePathState = "state/doorState.json";
const doorState = fs.existsSync(filePathState)
  ? JSON.parse(fs.readFileSync(filePathState).toString())
  : initialState;

const setDoorState = (key: string, value: string) => {
  doorState[key] = value;

  fs.writeFileSync(filePathState, JSON.stringify(doorState));
};

const setDoorStatus = (_status: string) => {
  // Remember old values
  status.previousStatus = status.status;

  status.status = _status;
};

const correctTop = () => {
  logger.info(
    `[Door] Try to apply correction for up (${config.door.correctionSec}s)`
  );

  const response = moveDoor(DOOR_DIRECTION.UP, config.door.correctionSec);

  if (response.status === 200) {
    setDoorState(
      "durationUpSec",
      doorState.durationUpSec + config.door.correctionSec
    );
    setDoorState("state", DOOR_STATE.TOP);
  }

  return response;
};

const correctBottom = () => {
  logger.info(
    `[Door] Apply correction for down (${config.door.correctionSec}s)`
  );

  const response = moveDoor(DOOR_DIRECTION.DOWN, config.door.correctionSec);

  if (response.status === 200) {
    setDoorState(
      "durationDownSec",
      doorState.durationDownSec + config.door.correctionSec
    );
    setDoorState("state", DOOR_STATE.BOTTOM);
  }

  return response;
};

const makeResponse = (status: number, message: string, logType = "info") => {
  const response = {
    status,
    message,
  };

  logger[logType](message);

  return response;
};

const moveDoor = (direction: string, forceDuration = null) => {
  // Check if the motor can move
  if (direction !== DOOR_DIRECTION.UP && direction !== DOOR_DIRECTION.DOWN)
    return makeResponse(400, "[Door] Invalid parameter (up/down)", "warn");

  if (
    direction === DOOR_DIRECTION.UP &&
    doorState.state === DOOR_STATE.TOP &&
    !forceDuration
  )
    return makeResponse(
      409,
      "[Door] You ask to open the door : it's already open",
      "warn"
    );

  if (
    direction === DOOR_DIRECTION.DOWN &&
    doorState.state === DOOR_STATE.BOTTOM &&
    !forceDuration
  )
    return makeResponse(
      409,
      "[Door] You ask to close the door : it's already close",
      "warn"
    );

  if (
    direction === DOOR_DIRECTION.UP &&
    doorState.state === DOOR_STATE.BOTTOM &&
    forceDuration
  )
    return makeResponse(
      403,
      "[Door] You ask to calibrate the door to the up : it's impossible for the moment. Please end the bottom calibration then ask open the door. After the door has moved, you will start the up calibration",
      "warn"
    );

  if (
    direction === DOOR_DIRECTION.DOWN &&
    doorState.state === DOOR_STATE.TOP &&
    forceDuration
  )
    return makeResponse(
      403,
      "[Door] You ask to calibrate the door to the down : it's impossible for the moment. Please end the top calibration then ask close the door. After the door has moved, you will start the down calibration",
      "warn"
    );

  if (status.status !== "stop")
    return makeResponse(425, `[Door] Already moving ...`);

  // Ok, we pass securities : start the engine now
  const duration = forceDuration
    ? forceDuration
    : direction === DOOR_DIRECTION.UP
    ? doorState.durationUpSec
    : doorState.durationDownSec;

  if (duration <= 0)
    return makeResponse(500, `[Door] Cant move for ${duration}s ...`);

  if (direction === DOOR_DIRECTION.UP) motorInstance.moveUp();
  else if (direction === DOOR_DIRECTION.DOWN) motorInstance.moveDown();

  setDoorStatus("moving " + direction);

  // Switch off the motor later
  setTimeout(() => {
    stopDoor();

    if (!forceDuration)
      setDoorState(
        "state",
        direction === DOOR_DIRECTION.UP ? DOOR_STATE.TOP : DOOR_STATE.BOTTOM
      );

    logger.info(`[Door] Stopping…`);
  }, duration * 1000);

  return makeResponse(
    200,
    `[Door] Moving ${direction} for ${duration}s ${
      forceDuration ? "(forced/calibration)" : "(classical)"
    }`
  );
};

const stopDoor = () => {
  motorInstance.stop();
  setDoorStatus("stop");
};

export { moveDoor, correctBottom, correctTop, doorState, status };
