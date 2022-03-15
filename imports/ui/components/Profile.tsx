import * as React from "react";
import { FormattedMessage } from "react-intl";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import { MenuItem, Select } from "@mui/material";

const Profile: React.FC = () => {
  const user = useTracker(() => Meteor.user(), []);

  const handleUpdate = (key, value) => {
    Meteor.promise("profile.update", { [key]: value });
  };

  return (
    <div>
      <Select
        label={
          <FormattedMessage id={"Profile.locale"} defaultMessage={"Locale"} />
        }
        value={user.profile.locale}
        onChange={({ target: { value } }) => handleUpdate("locale", value)}
      >
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"fr"}>Français</MenuItem>
      </Select>

      <Select
        label={
          <FormattedMessage id={"Profile.theme"} defaultMessage={"Theme"} />
        }
        value={user.profile.theme}
        onChange={({ target: { value } }) => handleUpdate("theme", value)}
      >
        <MenuItem value={"automatic"}>
          <FormattedMessage id={"Profile.Auto"} defaultMessage={"Automatic"} />
        </MenuItem>
        <MenuItem value={"light"}>
          <FormattedMessage id={"Profile.Light"} defaultMessage={"Light"} />
        </MenuItem>
        <MenuItem value={"dark"}>
          <FormattedMessage id={"Profile.Dark"} defaultMessage={"Dark"} />
        </MenuItem>
      </Select>
    </div>
  );
};

export default Profile;
