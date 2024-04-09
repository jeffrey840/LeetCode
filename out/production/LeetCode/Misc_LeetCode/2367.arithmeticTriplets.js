function countArithmeticTriplets(nums, diff) {
	// Create a Set from the nums array for efficient look-up
	const numsSet = new Set(nums);
	let count = 0;

	// Iterate over the array
	for (let i = 0; i < nums.length; i++) {
		console.log(`Checking for ${nums[i]} as the first element of a triplet`);

		// Check if both elements that would form an arithmetic triplet with nums[i] exist
		if (numsSet.has(nums[i] + diff) && numsSet.has(nums[i] + 2 * diff)) {
			console.log(`Found a triplet: (${nums[i]}, ${nums[i] + diff}, ${nums[i] + 2 * diff})`);
			count++; // If both elements exist, we found a valid triplet
		}
	}

	return count;
}

// Example usage:
console.log("Output for [0,1,4,6,7,10] with diff 3:");
console.log(countArithmeticTriplets([0,1,4,6,7,10], 3)); // Output: 2
console.log("Output for [4,5,6,7,8,9] with diff 2:");
console.log(countArithmeticTriplets([4,5,6,7,8,9], 2)); // Output: 2
