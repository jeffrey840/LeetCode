function evenLast(array) {

	let sumEvenIndices = 0;
	for (let i = 0; i < array.length; i += 2) {
		sumEvenIndices += array[i];
	}

	// Multiply the sum by the last element of the array
	let result = sumEvenIndices * array[array.length - 1];

	return result;

}