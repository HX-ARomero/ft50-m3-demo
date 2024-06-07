export default function validateUser(user) {
  const emailRegexp = /\S+@\S+\.\S+/;
  const errors = {};

  if(!user.username) {
    errors.username = "Debe ingresar un username";
  } else {
    if(!emailRegexp.test(user.username)) {
      errors.username = "Username debe ser un email válido"
    }
  }

  if(!user.password) {
    errors.password = "Debe ingresar un password";
  } else {
    if(user.password.length < 4) {
      errors.password = "Contraseña de al menos 4 caracteres";
    }
    if(user.password.length > 6) {
      errors.password = "Contraseña de no mas de 6 caracteres";
    }
  }

  return errors;
}

console.log(
  validateUser({
    username: "a@b.a",
    password: "1234567",
  })
);
