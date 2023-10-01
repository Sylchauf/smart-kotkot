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
            
            console.log(`Try to add ${encodeURI(name)} (${encodeURI(camera.streamUri)})`)

            const res = await axios
              .put(
                `http://go2rtc:8184/api/streams?name=${encodeURI(name)}&src=${encodeURI(camera.streamUri)}`
              )
              .catch((error) => {
                console.error(`ADD STREAM ERROR: ${error}`);
              }); // We accept an error if there is already add

            resolve(Meteor.absoluteUrl(`rtsp/stream.html?src=${name}`));
          }
        }
      );
    });
  },
});
