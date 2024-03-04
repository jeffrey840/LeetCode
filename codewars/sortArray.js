function sortArray(array) {
	// Extract the odd numbers and sort them in ascending order.
	const sortedOdds = array.filter(number => number % 2 !== 0).sort((a, b) => a - b);

	let oddIndex = 0; // This will keep track of our position in the sortedOdds array.

	// Replace each odd number in the original array with the next one from sortedOdds.
	return array.map(number => number % 2 !== 0 ? sortedOdds[oddIndex++] : number);
}

// Testing the function with the provided examples
console.log(sortArray([7, 1])); // Should return [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // Should return [3, 8
