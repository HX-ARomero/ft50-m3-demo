//* TIPADO DÉBIL: JS infiere el tipo de dato
let usuario = {
  nombre: "Homero",
  apellido: "Simpson",
};
let clave = "1234";

//* TIPADO DINÁMICO: Puedo cambiar el tipo de dato
usuario = "Homero";
clave = 5678;

function saludar(nombre) {
  console.log(`Hola ${nombre.toUpperCase()}`);
}

saludar("Marge");
saludar(5);