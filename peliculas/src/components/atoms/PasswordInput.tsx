import React from "react";
import { TextInput } from "./TextInput";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

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
              data-testid="password-input-icon"
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff data-testid="visibility-off" />
              ) : (
                <Visibility data-testid="visibility-on" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
