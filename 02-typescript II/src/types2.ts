//* UNION TYPES: "|"
let miVariable: number | string = "Hola Mundo!";
miVariable = 1234;

let otraVariable: string | undefined;
console.log(otraVariable); //* undefined
otraVariable = "Nuevo Valor";

//* ALIAS
type TContacto3 = {
  email: string;
  telefono: string | number;
};

type TRol = "invitado" | "registrado" | "administrador";

type TUsuario3 = {
  nombre: string;
  clave: string;
  contactos: TContacto3;
  rol: TRol;
};

const otto: TUsuario3 & { id: number } = {
  nombre: "Otto",
  clave: "otto",
  contactos: {
    email: "email@mail.com",
    telefono: 123456789,
  },
  rol: "invitado",
  id: 53,
};
