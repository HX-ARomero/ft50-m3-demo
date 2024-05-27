//* Comilla dobles:
const ciudad = "Springfield";

//* Comillas simples:
const marge = "Marge";

//* Template strings:
const lisa: string = `'Lisa' vive en "${ciudad}"`;

//* lisa[200] = undefined !!!!!
console.log(lisa[200]);

if (lisa[200]) console.log(lisa[200]);
else console.log("No ha sido definido");

lisa[200] ? console.log(lisa[200]) : console.log("No ha sido definido");
