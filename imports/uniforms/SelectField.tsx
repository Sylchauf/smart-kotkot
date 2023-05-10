import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ConnectedFieldProps, connectField } from "uniforms";
import { Select as SelectFieldMui } from "@mui/material";

const SelectField: React.FC<ConnectedFieldProps<any>> = (props) => {
  const [_options, setOptions] = useState(null);

  useEffect(() => {
    props.options().then((res) => setOptions(res));
  }, []);

  if (!_options) return <CircularProgress />;

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <SelectFieldMui
        key={props.value}
        value={props.value}
        label={props.label}
        onChange={({ target: { value } }) => props.onChange(value)}
      >
        {_options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </SelectFieldMui>
    </FormControl>
  );
};

export default connectField(SelectField);
