import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validateUser from "../helpers/validateUser";

function FormikLogin() {
  return (
    <div>
      <h2>Formulario con React y Formik</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={validateUser}
        onSubmit={(values) => {
          alert(
            `Datos enviados, username: ${values.username}, password: ${values.password}`
          );
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Username: </label>
            <Field 
              id="username"
              type="text"
              name="username"
              placeholder="Ingresa tu username"
            />
            <ErrorMessage name="username" />
          </div>

          <div>
          <label htmlFor="password">Username: </label>
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu password"
          />
          <ErrorMessage name="password" />
          </div>

          <button type="submit">Enviar</button>

        </Form>
      </Formik>
    </div>
  );
}

export default FormikLogin;
