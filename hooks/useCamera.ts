import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: "/api/camera/",
});

const useCamera = () => {
  const result = useQuery(
    "cameraList",
    async () => {
      const result = await axiosInstance.get("list");

      return result.data;
    },
    { refetchInterval: 2000, staleTime: 2000, cacheTime: 2000 }
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
