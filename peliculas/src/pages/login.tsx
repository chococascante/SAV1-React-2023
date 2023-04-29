import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFirebaseAuth } from "@/contexts/firebase-auth-context";
import { Typography } from "@mui/material";
import { TextInput } from "@/components/atoms/TextInput";
import { LoadingButton } from "@mui/lab";

const REQUIRED_FIELD_MESSAGE = "Campo requerido.";
const INVALID_EMAIL_MESSAGE = "Correo inválido.";
const MIN_PASSWORD_LENGTH_MESSAGE = "Mínimo 8 caracteres.";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email(INVALID_EMAIL_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string()
    .required(REQUIRED_FIELD_MESSAGE)
    .min(8, MIN_PASSWORD_LENGTH_MESSAGE),
});

const LoginPage = () => {
  const { login } = useFirebaseAuth();

  const handleSubmit = React.useCallback(
    async (values: LoginFormValues) => {
      try {
        await login(values.email, values.password);
      } catch (error) {
        console.error(error);
      }
    },
    [login]
  );

  return (
    <div>
      <Formik<LoginFormValues>
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        validateOnMount
        validateOnChange
        validationSchema={LoginFormSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
          isValidating,
        }) => (
          <form onSubmit={handleSubmit}>
            <Typography>
              ¡Bienvenido de nuevo! Por favor, inicia sesión.
            </Typography>

            <TextInput
              id="email"
              type="email"
              label="Correo electrónico"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={!!(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextInput
              id="password"
              type="password"
              label="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={!!(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <LoadingButton
              disabled={!isValid || isValidating}
              loading={isSubmitting || isValidating}
              type="submit"
            >
              Iniciar sesión
            </LoadingButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
