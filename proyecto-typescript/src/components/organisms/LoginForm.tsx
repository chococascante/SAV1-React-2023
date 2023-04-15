import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Typography, Button } from "@mui/material";
import { TextInput } from "../atoms/TextInput";
import { PasswordInput } from "../atoms/PasswordInput";
import LoadingButton from "@mui/lab/LoadingButton";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo inválido")
    .required("Campo requerido")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: Yup.string()
    .required("Campo requerido")
    .min(8, "Mínimo 8 caracteres"),
});

export const LoginForm = () => {
  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <div className="mt-20% flex flex-col w-4/5 sm:w-1/2 lg:w-1/3 p-8 space-y-5 shadow-xl">
      <Formik<LoginFormValues>
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
        validateOnBlur
        validateOnChange
        validateOnMount
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          isValidating,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5"
          >
            <Typography>
              ¡Bienvenido! Por favor, inicia sesión para continuar.
            </Typography>

            <TextInput
              id="email"
              type="email"
              label="Correo electrónico"
              placeholder="correo.ejemplo@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              className="w-80"
              required
            />
            <PasswordInput
              id="password"
              placeholder="Ingrese por lo menos 8 caractéres"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              required
              className="w-80"
            />
            <LoadingButton
              disabled={!isValid || isValidating}
              loading={isSubmitting || isValidating}
              type="submit"
              variant="contained"
              color="primary"
            >
              Iniciar sesión
            </LoadingButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
