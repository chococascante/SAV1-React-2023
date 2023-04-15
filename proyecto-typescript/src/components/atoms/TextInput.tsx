import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const TextInput: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
        className: "text-lg font-semibold",
      }}
    />
  );
};
