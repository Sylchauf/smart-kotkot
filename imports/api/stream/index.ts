import axios from "axios";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "stream.start": async function (cameraId): Promise<string> {
    const userId = this.userId;

    return new Promise((resolve, reject) => {
      Meteor.call(
        "devices.sendCommand",
        {
          endPoint: `/api/camera/list`,
        },
        async (err, cameraList) => {
          if (err) reject();
          else {
            const camera = cameraList.find((c) => c.id === String(cameraId));

            const name = `${userId}-${cameraId}`;

            await axios
              .post(`http://rtspserver:8083/stream/${name}/add`, {
                name,
                channels: {
                  "0": {
                    name: "ch1",
                    url: camera.streamUri,
                    on_demand: false,
                    debug: false,
                    status: 0,
                  },
                },
              })
              .catch((error) => {
                console.error(error);
              }); // We accept an error if there is already add

            resolve(
              Meteor.absoluteUrl(
                `rtsp/stream/${name}/channel/0/webrtc?uuid=${name}&channel=0`
              )
            );
          }
        }
      );
    });
  },
});
