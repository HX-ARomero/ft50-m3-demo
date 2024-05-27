function restar(a: any, b: any) {
  return a - b;
}

let miVariable: any = null;
miVariable = "Valor";
miVariable = 1234;

//* ASERCIÓN DE TIPO => Dato para TypeScript
const datoDesdeBody = "Valor"; //* const { datoDesdeBody } = req.body;
const otraVariable = datoDesdeBody as string;

// otraVariable.