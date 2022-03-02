import axios from "axios";
import { useQuery } from "react-query";
import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: "/api/camera/",
});

const useCamera = () => {
  const { config } = useConfig();

  const result = useQuery(
    "cameraList",
    async () => {
      const result = await axiosInstance.get("list");

      return result.data;
    },
    {
      refetchInterval: config.refetchIntervalCamera || 10000,
    }
  );

  const takePictures = async () => {
    const tabPromise = result.data.map(async (camera: any) => {
      return axiosInstance.get(`images/${camera.id}/take`);
    });

    await Promise.all(tabPromise);
  };

  return { list: result?.data, takePictures };
};

export default useCamera;
