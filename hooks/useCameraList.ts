import axios from "axios";
import { useQuery } from "react-query";

const useCameraList = () => {
  const result = useQuery(
    "cameraList",
    async () => {
      const result = await axios.get("/api/camera/list");

      return result.data;
    },
    { refetchInterval: 2000 }
  );

  return result?.data;
};

export default useCameraList;
