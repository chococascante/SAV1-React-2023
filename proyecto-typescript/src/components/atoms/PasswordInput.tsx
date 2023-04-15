import React from "react";
import { TextInput } from "./TextInput";
import { TextFieldProps } from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordInput: React.FC<TextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <TextInput
      {...props}
      label="Contraseña"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
