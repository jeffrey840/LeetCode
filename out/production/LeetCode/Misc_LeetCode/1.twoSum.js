function twoSum(nums, target) {
	const numIndices = {}; // Initialize an empty object to store indices of numbers

	for (i in nums) { // Iterate through the elements of the nums array
		const complement = target - nums[i]; // Calculate the complement required to reach the target sum
		if (numIndices[complement] !== undefined) { // Check if the complement exists in numIndices
			return [numIndices[complement], i]; // Return indices if complement is found
		}
		numIndices[nums[i]] = i; // Store the current number's index in numIndices
	}
	return null; // Return null if no solution is found
}
