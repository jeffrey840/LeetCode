

function rearrangeArray(nums, pivot) {
	let left = 0;
	let right = nums.length - 1;
	let current = 0;

	while (current <= right) {
		if (nums[current] < pivot) {
			[nums[current], nums[left]] = [nums[left], nums[current]]; // Swap
			left++;
			current++;
		} else if (nums[current] > pivot) {
			[nums[current], nums[right]] = [nums[right], nums[current]]; // Swap
			right--;
		} else {
			current++;
		}
	}

	return nums;
}

// Test Cases
console.log(rearrangeArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9, 5, 3, 10, 10, 12, 14]
console.log(rearrangeArray([-3, 4, 3, 2], 2));                // [-3, 2, 4, 3]
