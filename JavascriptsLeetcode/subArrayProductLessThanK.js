var numSubarrayProductLessThanK = function(nums, k) {
	if (k <= 1) {
		return 0;
	}

	let ans = 0, left = 0, curr = 1;

	for (let right = 0; right < nums.length; right++) {
		curr *= nums[right];

		console.log("Iteration:", right + 1, "Right:", right, "Curr:", curr); // Log 1

		while (curr >= k) {
			curr /= nums[left];
			left++;

			console.log("  Shrinking - Left:", left, "Curr:", curr); // Log 2
		}

		ans += right - left + 1;

		console.log("  Valid Subarrays:", right - left + 1, "Ans:", ans); // Log 3
	}

	return ans;
};

console.log(numSubarrayProductLessThanK(nums = [10, 5, 2, 6],100))