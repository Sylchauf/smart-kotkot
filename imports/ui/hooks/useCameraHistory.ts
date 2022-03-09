import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../../constants/api";

const useCameraHistory = (cameraId: string) => {
  const result = useQuery("cameraHistory", async () => {
    const result = await axios.get(
      `${BASE_URL}/api/camera/images/${cameraId}/list`
    );

    return result.data;
  });

  return result?.data || [];
};

export default useCameraHistory;
