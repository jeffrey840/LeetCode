function longestOnes(nums, k) {
	let left = 0;
	let zeroCount = 0;
	let maxLength = 0;

	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			zeroCount++;
		}

		console.log("Iteration:", right, "Zero Count:", zeroCount); // Log 1

		// Shrink window if zeroCount exceeds 'k'
		while (zeroCount > k) {
			if (nums[left] === 0) {
				zeroCount--;
			}
			left++;
			console.log("  Shrinking - Left:", left); // Log 2
		}

		maxLength = Math.max(maxLength, right - left + 1);
		console.log("  Max Length:", maxLength); // Log 3
	}

	return maxLength;
}

console.log(longestOnes(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2))






