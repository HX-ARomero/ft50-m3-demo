import React, { useState } from "react";
import validateUser from "../helpers/validateUser";

function FormLogin() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Debe ingresar un username",
    password: "",
  });

  const handleChange = (event) => {
    //* console.log(event.target.value);
    //* console.log(event.target.name);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //* Petición al Back
    alert(
      `Datos enviados, username: ${input.username}, password: ${input.password}`
    );
    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Formulario en React</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={input.username}
            placeholder="Ingresa tu username"
            onChange={handleChange}
          />
          <p style={{ color: "coral" }}>
            {errors.username ? errors.username : null}
          </p>
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={input.password}
            placeholder="Ingresa tu password"
            onChange={handleChange}
          />
          <p style={{ color: "coral" }}>
            {errors.password && errors.password}
          </p>
        </div>

        <input type="submit" value="Enviar" disabled={errors.username || errors.password} />
      </form>
    </div>
  );
}

export default FormLogin;
