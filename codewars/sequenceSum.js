function sequenceSum(begin, end, step) {
	// Log initial values
	console.log(`Starting sequenceSum with begin=${begin}, end=${end}, step=${step}`);

	// If begin is greater than end, return 0
	if (begin > end) {
		console.log('Begin is greater than end, returning 0');
		return 0;
	}

	let sum = 0;

	// Loop from begin to end with the given step
	for (let i = begin; i <= end; i += step) {
		console.log(`Adding ${i} to sum (current sum: ${sum})`);
		sum += i;
	}

	console.log(`Final sum: ${sum}`);
	return sum;
}

// Test case
console.log(`Result: ${sequenceSum(1, 5, 3)}`);  // Output: 5
