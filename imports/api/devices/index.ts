import { Meteor } from "meteor/meteor";
import { DEVICES, sendCommand } from "../../../server/websocket";
import Devices from "../../db/devices/collection";

Meteor.methods({
  "devices.sendCommand": async function ({ endPoint }) {
    const device = Devices.findOne({ userId: this.userId });

    if (!device) throw new Meteor.Error(500, "No device associated");

    const socket = DEVICES[device._id];

    if (!socket) throw new Meteor.Error(500, "No device connected");

    return sendCommand(device._id, { endPoint });
  },
  "devices.read": async function () {
    const devices = Devices.find({ userId: this.userId });

    return devices.map((device) => {
      return {
        _id: device._id,
        lastAction: device.lastAction,
        isOnline: !!DEVICES[device._id],
      };
    });
  },
  "devices.associate": async function (moduleId) {
    const device = await Devices.rawCollection().findOne({ _id: moduleId });

    if (!device) {
      // If the device never connected, claim the futur device
      Devices.insert({
        _id: moduleId,
        userId: this.userId,
      });
    } else if (!device.userId) {
      // If this devices is not associated, associate to the user
      Devices.rawCollection().update(
        { _id: moduleId },
        { $set: { userId: this.userId } }
      );
    }
  },
  "devices.delete": function (moduleId) {
    Devices.remove(moduleId);
  },
});
