import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

const useCameraHistory = (cameraId: string) => {
  const { data } = useQuery("cameraHistory", async () => {
    return Meteor.promise("devices.sendCommand", {
      endPoint: `/api/camera/images/${cameraId}/list`,
    });
  });

  return data || [];
};

export default useCameraHistory;
