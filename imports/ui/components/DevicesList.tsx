import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

import MaterialTable from "@material-table/core";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

import useDevices from "../hooks/useDevices";
import EditDevice from "./EditDevice";

const DevicesList = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading, refetch } = useDevices();

  const handleEdit = (moduleId) => setOpen(true);

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
      title: <FormattedMessage id={"DevicesList.name"} defaultMessage={"Name"} />,
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
      {open && <EditDevice onClose={() => setOpen(false)} />}
      <MaterialTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        actions={[
          {
            icon: SettingsIcon,
            onClick: (event, rawData) => handleEdit(rawData._id),
          },
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
