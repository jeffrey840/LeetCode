
function applyOperations(nums) {

	const n = nums.length;

	// Apply operations
	for (let i = 0; i < n - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums[i] *= 2;
			nums[i + 1] = 0;
		}
	}

	// Shift zeros to the end
	let count = 0;  // Count of non-zero elements
	for (let i = 0; i < n; i++) {
		if (nums[i] !== 0) {
			nums[count++] = nums[i];
		}
	}

	// Fill the rest of the array with zeros
	while (count < n) {
		nums[count++] = 0;
	}

	return nums;


}

