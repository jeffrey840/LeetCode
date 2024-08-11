function diff(a, b){
	// Create frequency count objects for both arrays
	const countA = {};
	const countB = {};

	// Count occurrences in array a
	a.forEach(char => {
		countA[char] = (countA[char] || 0) + 1;
	});

	// Count occurrences in array b
	b.forEach(char => {
		countB[char] = (countB[char] || 0) + 1;
	});

	// Find unique characters in a
	const uniqueA = Object.keys(countA).filter(char => !countB[char]);

	// Find unique characters in b
	const uniqueB = Object.keys(countB).filter(char => !countA[char]);

	// Combine the unique characters and sort the result
	const difference = uniqueA.concat(uniqueB).sort();

	return difference;
}