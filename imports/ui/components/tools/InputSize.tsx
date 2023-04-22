import React from "react";
import { NumericFormat } from "react-number-format";

import { TextField } from "@mui/material";

interface Props {
  value: number;
  label?: any;
  format?: any;
  max?: number;
  thousandSeparator?: string;
  onChange: any;
}

const InputSize: React.FC<Props> = ({
  value,
  label,
  format,
  max,
  thousandSeparator,
  onChange,
  ...props
}) => {
  return (
    <NumericFormat
      {...props}
      allowNegative={false}
      isAllowed={(values) => {
        if (max && values.floatValue > max) return false;

        return true;
      }}
      allowedDecimalSeparators={[".", ","]}
      decimalScale={2}
      fixedDecimalScale={true}
      value={value / 100}
      label={label}
      max={max}
      suffix={" meters"}
      customInput={TextField}
      onValueChange={({ value: v }) => onChange({ target: { name, value: v } })}
    />
  );
};

export default InputSize;
