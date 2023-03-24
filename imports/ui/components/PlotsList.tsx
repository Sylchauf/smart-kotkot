import React from "react";
import { FormattedMessage } from "react-intl";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import MaterialTable from "@material-table/core";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

import usePlots from "../hooks/usePlots";

const PlotsList = () => {
  const { data, isLoading, refetch } = usePlots();
  const navigate = useNavigate();

  const handleEdit = (plotId) => navigate(`/garden/${plotId}/editor`);

  const handleDelete = async (plotId) => {
    try {
      await Meteor.promise("plots.delete", plotId);

      refetch();

      toast.success(
        <FormattedMessage
          id={"PlotsList.successDelete"}
          defaultMessage={"Successfully deleted !"}
        />
      );
    } catch (error) {
      toast.error(
        <FormattedMessage
          id={"PlotsList.errorDelete"}
          defaultMessage={"Error happend :("}
        />
      );
    }
  };

  const columns = [
    {
      field: "_id",
      title: <FormattedMessage id={"PlotsList.id"} defaultMessage={"ID"} />,
    },
    {
      field: "name",
      title: <FormattedMessage id={"PlotsList.name"} defaultMessage={"Name"} />,
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

export default PlotsList;
