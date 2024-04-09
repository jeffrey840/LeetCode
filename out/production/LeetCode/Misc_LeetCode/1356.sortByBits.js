var sortByBits = function(arr) {
	// Sort the array using custom logic
	arr.sort((a, b) => {
		// Convert numbers to binary and count the number of 1's
		const countA = a.toString(2).split('').filter(x => x === '1').length;
		const countB = b.toString(2).split('').filter(x => x === '1').length;

		// If the count of 1's is the same, sort by the numerical value
		if (countA === countB) {
			return a - b;
		}

		// Otherwise, sort by the count of 1's
		return countA - countB;
	});

	// The array is sorted in place, so just return it
	return arr;
};