var twoSum = function(numbers, target) {
	let left = 0; // Start from the beginning of the array
	let right = numbers.length - 1; // Start from the end of the array

	// Loop until the two pointers meet
	while (left < right) {
		let sum = numbers[left] + numbers[right];

		// Check if we found the target sum
		if (sum === target) {
			// Return the indices, adjusted for 1-based indexing
			return [left + 1, right + 1];
		} else if (sum < target) {
			// Move the left pointer to the right to increase the sum
			left++;
		} else {
			// Move the right pointer to the left to decrease the sum
			right--;
		}
	}
};