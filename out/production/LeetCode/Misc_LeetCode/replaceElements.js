
function replaceElements(arr) {
	// Initialize the maximum value found so far with -1, as per the problem statement
	let maxFromRight = -1;

	// Iterate through the array from right to left
	for (let i = arr.length - 1; i >= 0; i--) {
		// Store the current value before it gets replaced
		let currentValue = arr[i];
		// Replace the current element with the maxFromRight
		arr[i] = maxFromRight;
		// Update the maxFromRight if the current value is greater than maxFromRight
		if (currentValue > maxFromRight) {
			maxFromRight = currentValue;
		}
	}

	return arr;
}

// Example tests
console.log(replaceElements([17, 18, 5, 4, 6, 1])); // Expected output: [18, 6, 6, 6, 1, -1]
console.log(replaceElements([400])); // Expected output: [-1]


