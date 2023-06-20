function findDisappearedNumbers(nums) {
	const result = [];

	// Mark the presence of each number by negating the value at its corresponding index
	for (let i = 0; i < nums.length; i++) {
		const index = Math.abs(nums[i]) - 1;
		if (nums[index] > 0) {
			nums[index] = -nums[index];
		}
	}

	// Find the positive values (indices) which indicate missing numbers
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result.push(i + 1);
		}
	}

	return result;
}












