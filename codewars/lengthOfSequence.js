var lengthOfSequence = function(arr, n) {
	let firstIndex = -1;
	let lastIndex = -1;
	let count = 0;  // To count occurrences of n

	// Traverse the array to find occurrences of n
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			count++;  // Increment count each time n is found
			if (firstIndex === -1) {
				firstIndex = i;  // Set the first occurrence
			}
			lastIndex = i;  // Continuously update to the last occurrence
		}
	}

	// Check conditions based on count of n
	if (count > 2) {
		// If n occurs more than twice, return 0
		return 0;
	} else if (count === 2) {
		// If n occurs exactly twice, calculate the length
		return lastIndex - firstIndex + 1;
	} else {
		// If n occurs less than twice, return 0
		return 0;
	}
};
// Example usage:
console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9, 7], 7)); // Output: 0, as 7 appears more than twice
console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 9], 7));       // Output: 0, only one occurrence of 7
console.log(lengthOfSequence([7, 7], 7));                       // Output: 2, 7 appears exactly twice