function busquedaSuma(array, numero) {
  let pasos = 0;
  let resultado = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pasos++;
      if (array[i] + array[j] === numero) {
        resultado = true;
        break;
      }
    }
  }
  console.log({ resultado, datos: array.length, pasos });
  return;
}
//* O(n^2)

function arrayGenerador(n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  return newArray;
}

busquedaSuma(arrayGenerador(10), 100);
busquedaSuma(arrayGenerador(100), 1000);
busquedaSuma(arrayGenerador(1000), 10000);
busquedaSuma(arrayGenerador(10000), 100000);

//* [ 1, 2, 3, 4, 5 ] 20
//*         ^
//*               ^
