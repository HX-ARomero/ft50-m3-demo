function busquedaBinaria(array, numero) {
  let inicio = 0;
  let fin = array.length - 1;
  let pasos = 0;
  let encontrado = false;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    pasos++;
    if (array[medio] === numero) {
      encontrado = true;
      break;
    } else if (array[medio] < numero) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  console.log({ encontrado, datos: array.length, pasos });
  return encontrado;
}

function arrayGenerador(n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  return newArray;
}

busquedaBinaria(arrayGenerador(10), 5);
busquedaBinaria(arrayGenerador(100), 50);
busquedaBinaria(arrayGenerador(1000), 500);
busquedaBinaria(arrayGenerador(10000), 5000);
busquedaBinaria(arrayGenerador(100000), 50000);
