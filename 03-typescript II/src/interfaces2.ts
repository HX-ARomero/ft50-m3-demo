interface IPersona1 {
  nombre: string;
  apellido: string;
}
//? mucho código
const lisa: IPersona1 = {
  nombre: "Lisa",
  apellido: "Simpson",
  edad: 8,
}

//* MERGING
interface IPersona1 {
  edad: number;
}

//* EXTENSIÓN
interface IEmpleado extends IPersona1 {
  cargo: string;
}

const lisa1: IPersona1 = {
  nombre: "Lisa",
  apellido: "Simpson",
  edad: 8,
}

const homero1: IEmpleado = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 40,
  cargo: "Jefe de seguridad",
}

const bart1: Omit<IPersona1, "edad"> = {
  nombre: "Homero",
  apellido: "Simpson",
}

const bart2: Partial<IPersona1> = {
  nombre: "Homero",
  // apellido: "Simpson",
}
