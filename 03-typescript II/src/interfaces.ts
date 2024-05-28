type TContacto = {
  email: string;
  celular?: number;
};

enum THobbies {
  AJEDREZ = "Jugar Ajedrez",
  CODEAR = "Practicar TypeScript",
  MUSICA = "Escuchar música",
  MIRARTV = "Mirar tele",
}

interface IPersona {
  id: number;
  nombre: string;
  hobbies: THobbies[];
  contacto: TContacto;
}

const homero: IPersona = {
  id: 1,
  nombre: "Homero",
  hobbies: [THobbies.MUSICA, THobbies.MIRARTV], //* TV, Mirar tele, Ver tele
  contacto: {
    email: "homero@ejemplo.com",
    // celular: 123456789,
  },
  // cargo: "Jefe de Seguridad",
};

console.log(homero);
