

function minSum(array) {
	// Sort the array in ascending order
	array.sort((a, b) => a - b);

	let sum = 0;

	// Iterate only half of the array since we're pairing the first and last elements
	for (let i = 0; i < array.length / 2; i++) {
		// Multiply the i-th smallest with the i-th largest number
		sum += array[i] * array[array.length - 1 - i];
	}

	return sum;
}