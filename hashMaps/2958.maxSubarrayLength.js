/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
	let start = 0;
	let maxLen = 0;
	const frequencyMap = new Map();

	for (let end = 0; end < nums.length; end++) {
		// Increase the frequency of the current number
		if (frequencyMap.has(nums[end])) {
			frequencyMap.set(nums[end], frequencyMap.get(nums[end]) + 1);
		} else {
			frequencyMap.set(nums[end], 1);
		}

		// Check if any frequency exceeds k and adjust start pointer
		while (frequencyMap.get(nums[end]) > k) {
			frequencyMap.set(nums[start], frequencyMap.get(nums[start]) - 1);
			if (frequencyMap.get(nums[start]) === 0) {
				frequencyMap.delete(nums[start]);
			}
			start++;
		}

		// Update the maximum length of the subarray
		maxLen = Math.max(maxLen, end - start + 1);
	}

	return maxLen;
};