

function countPairs(nums, target) {
	let pairs = 0; // Correctly initialize pairs as a number
	let n = nums.length;

	for (let i = 0; i < n - 1; i++) { // Adjusted condition
		for (let j = i + 1; j < n; j++) { // Adjusted start and condition
			if (nums[i] + nums[j] < target) { // Correct condition
				pairs++; // Increment pairs if the condition is met
			}
		}
	}

	return pairs; // Return the count of pairs
}
