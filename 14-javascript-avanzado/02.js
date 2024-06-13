function sumaArray(array) {
	let pasos = 0;
	let resultado = 0;
	
	for (let i = 0; i < array.length; i++) {
		resultado += array[i];
		pasos++;
	}
	console.log({ resultado, datos: array.length, pasos });
	return;
}
//* O(n)

sumaArray([1]);
sumaArray([1, 2]);
sumaArray([1, 2, 3]);
sumaArray([1, 2, 3, 4]);
sumaArray([1, 2, 3, 4, 5]);