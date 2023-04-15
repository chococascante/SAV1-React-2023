import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { TextInput } from "../atoms/TextInput";
import { PasswordInput } from "../atoms/PasswordInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { useNavigate } from "react-router-dom";

interface SignupFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo inválido")
    .required("Campo requerido")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: Yup.string()
    .required("Campo requerido")
    .min(8, "Mínimo 8 caracteres"),
});

export const SignupForm = () => {
  const { signup } = useFirebaseAuth();
  const navigate = useNavigate();

  const onSubmit = async (values: SignupFormValues) => {
    await signup(values.email, values.password);
    navigate("/");
  };

  return (
    <div className="mt-20% flex flex-col w-4/5 sm:w-1/2 lg:w-1/3 p-8 space-y-5 shadow-xl">
      <Formik<SignupFormValues>
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
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
            <Typography>Por favor cree un usuario.</Typography>

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
