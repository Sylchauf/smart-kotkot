import { WebApp } from "meteor/webapp";
import socketIO from "socket.io";
import { v4 as uuidv4 } from "uuid";
import Devices from "../imports/db/devices/collection";

const io = socketIO(WebApp.httpServer);

export const DEVICES = {};
const socketQueue = {};

export const sendCommand = (moduleId, data) => {
  return new Promise((resolve, reject) => {
    // Generate a unique id to identify the async response later
    const socketQueueId = uuidv4();

    // We stock the resolver to wait response
    socketQueue[socketQueueId] = resolve;

    const message = {
      commandId: socketQueueId,
      message: data,
    };

    try {
      DEVICES[moduleId].emit("command-device", message);
    } catch (e) {
      reject(e);
    }
  });
};

io.on("connection", function (socket) {
  socket.on("disconnect", () => {
    delete DEVICES[socket.moduleId];
  });

  socket.on("register-device", function (message) {
    DEVICES[message.moduleId] = socket;

    socket.moduleId = message.moduleId;

    Devices.rawCollection().updateOne(
      { _id: message.moduleId },
      {
        $set: {
          _id: message.moduleId,
          version: message.version,
          lastAction: new Date(),
        },
      },
      { upsert: true }
    );
  });

  socket.on("response-device", (data) => {
    if (data["commandId"] && socketQueue[data["commandId"]]) {
      // Call the resolver with the result
      socketQueue[data["commandId"]](data["message"]);

      // to free up memory…
      delete socketQueue[data["commandId"]];
    }
  });
});
