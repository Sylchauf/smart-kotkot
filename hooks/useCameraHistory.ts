import axios from "axios";
import { useQuery } from "react-query";

const useCameraHistory = (cameraId: string) => {
  const result = useQuery("cameraHistory", async () => {
    const result = await axios.get(`/api/camera/images/${cameraId}/list`);

    return result.data;
  });

  return result?.data || [];
};

export default useCameraHistory;
