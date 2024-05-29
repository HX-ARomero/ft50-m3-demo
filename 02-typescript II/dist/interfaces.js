"use strict";
var THobbies;
(function (THobbies) {
    THobbies["AJEDREZ"] = "Jugar Ajedrez";
    THobbies["CODEAR"] = "Practicar TypeScript";
    THobbies["MUSICA"] = "Escuchar m\u00FAsica";
    THobbies["MIRARTV"] = "Mirar tele";
})(THobbies || (THobbies = {}));
const homero = {
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
