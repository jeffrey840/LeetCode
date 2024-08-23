function leastLarger(a,i) {
	// Get the target number at the given index
	const target = a[i];

	// Initialize variables to track the smallest larger number and its index
	let leastLargerNum = Infinity;
	let leastLargerIndex = -1;

	// Iterate through the array
	for (let j = 0; j < a.length; j++) {
		if (a[j] > target && a[j] < leastLargerNum) {
			leastLargerNum = a[j];
			leastLargerIndex = j;
		}
	}

	// Return the index of the smallest larger number, or -1 if not found
	return leastLargerIndex;
}



