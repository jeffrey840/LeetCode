
var sortArrayByParityII = function(nums) {
	const n = nums.length;
	let j = 1; // Pointer for odd positions

	for (let i = 0; i < n; i += 2) { // Pointer for even positions
		if (nums[i] % 2 === 1) { // If the number at the even index is odd
			while (nums[j] % 2 === 1) { // Find an odd number in the wrong position (odd index)
				j += 2;
			}
			// Swap the odd number at the even index with the even number at the odd index
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	}

	return nums;
};