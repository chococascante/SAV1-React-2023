import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFirebaseAuth } from "@/contexts/firebase-auth-context";
import { Typography } from "@mui/material";
import { TextInput } from "@/components/atoms/TextInput";

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
        onSubmit={() => {}}
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
          <form>
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
