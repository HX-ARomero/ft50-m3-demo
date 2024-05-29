type TPersona2 = {
  nombre: string;
  apellido: string;
  edad: number;
}

//* MERGING => NO PERMITIDO
// type TPersona2 = {
//   edad: number
// }

//* EXTENDER
type TEstudiante2 = TPersona2 & {
  carrera: string;
}

const marge2: TPersona2 = {
  nombre: "Marge",
  apellido: "Bubbie",
  edad: 40,
}

const lisa2: TEstudiante2 = {
  nombre: "Lisa",
  apellido: "Simpson",
  edad: 8,
  carrera: "FullStack",
}

const bart: Partial<TEstudiante2> = {
  // nombre: "Lisa",
  // apellido: "Simpson",
  edad: 10,
  carrera: "FullStack",
}