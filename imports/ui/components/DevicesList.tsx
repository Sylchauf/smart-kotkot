import React from "react";
import { FormattedMessage } from "react-intl";
import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

import MaterialTable from "@material-table/core";
import DeleteIcon from "@mui/icons-material/Delete";

import useDevices from "../hooks/useDevices";

const DevicesList = () => {
  const { data, isLoading, refetch } = useDevices();

  const handleDelete = async (moduleId) => {
    try {
      await Meteor.promise("devices.delete", moduleId);

      refetch();

      toast.success(
        <FormattedMessage
          id={"DevicesList.successDelete"}
          defaultMessage={"Successfully deleted !"}
        />
      );
    } catch (error) {
      toast.error(
        <FormattedMessage
          id={"DevicesList.errorDelete"}
          defaultMessage={"Error happend :("}
        />
      );
    }
  };

  const columns = [
    {
      field: "_id",
      title: <FormattedMessage id={"DevicesList.id"} defaultMessage={"ID"} />,
    },
    {
      field: "name",
      title: <FormattedMessage id={"DevicesList.id"} defaultMessage={"Name"} />,
    },
    {
      field: "lastAction",
      type: "datetime",
      title: (
        <FormattedMessage
          id={"DevicesList.LastAction"}
          defaultMessage={"Last action"}
        />
      ),
    },
  ];

  return (
    <div>
      <MaterialTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        actions={[
          {
            icon: DeleteIcon,
            onClick: (event, rawData) => handleDelete(rawData._id),
          },
        ]}
        options={{
          search: false,
          toolbar: false,
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default DevicesList;
