function devuelveLongitud(array) {
	let pasos = 0;
	
	const resultado = array.length;
	pasos++;
	
	console.log({ resultado, datos: array.length, pasos });
	return;
}
//* O(1)

devuelveLongitud([1]);
devuelveLongitud([1, 2]);
devuelveLongitud([1, 2, 3]);
devuelveLongitud([1, 2, 3, 4]);
devuelveLongitud([1, 2, 3, 4, 5]);
