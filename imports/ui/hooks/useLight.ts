import { useConfirm } from "material-ui-confirm";
import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

const useLight = () => {
  const confirm = useConfirm();

  const { data, isLoading, refetch } = useQuery<any>(
    "lightStatus",
    async () => {
      return Meteor.promise("devices.sendCommand", {
        endPoint: "/api/light/status",
      });
    },
    {
      refetchInterval: 30000,
    }
  );

  const callEndPoint = async (endPoint) => {
    await confirm();

    const result = await Meteor.promise("devices.sendCommand", {
      endPoint,
    });

    refetch();

    return result;
  };

  const on = () => callEndPoint("/api/light/on");
  const off = () => callEndPoint("/api/light/off");

  return {
    state: data?.state,
    isLoading,
    nextAutomation: data?.nextAutomation?.[0] || {},
    on,
    off,
  };
};

export default useLight;
