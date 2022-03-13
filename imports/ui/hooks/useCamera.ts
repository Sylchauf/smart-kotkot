import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

const useCamera = () => {
  const { data, isLoading } = useQuery(
    "cameraList",
    async () => {
      return Meteor.promise("devices.sendCommand", {
        endPoint: "/api/camera/list",
      });
    },
    {
      refetchInterval: 10000,
    }
  );

  const takePictures = async () => {
    const tabPromise = data?.map(async (camera: any) =>
      Meteor.promise("devices.sendCommand", {
        endPoint: `/api/camera/images/${camera.id}/take`,
      })
    );

    await Promise.all(tabPromise);
  };

  return { list: data || [], isLoading, takePictures };
};

export default useCamera;
