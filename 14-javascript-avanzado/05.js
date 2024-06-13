function generarSubsets(array) {
  let pasos = 0;

  function generateHelper(subset, index) {
    if (index === array.length) {
      console.log(subset);
      pasos++;
      return;
    }
    generateHelper([...subset, array[index]], index + 1);
    generateHelper(subset, index + 1);
  }

  generateHelper([], 0);
  console.log({ datos: array.length, pasos });
}

generarSubsets([1, 2]);
generarSubsets([1, 2, 3]);
generarSubsets([1, 2, 3, 4]);
generarSubsets([1, 2, 3, 4, 5]);
generarSubsets([1, 2, 3, 4, 5, 6]);
// generarSubsets([1, 2, 3, 4, 5, 6, 7]);

//* 2 = 4 = 2x2 =2^2
//* 3 = 8 = 2x2x2 = 2^3
//* 4 = 16 = 2x2x2x2 = 2^4
//* 5 = 32 = 2x2x2x2x2 = 2^5

//* 2^64
