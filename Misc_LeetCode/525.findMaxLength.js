/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
	let hashMap = new Map();
	let maxLen = 0;
	let count = 0;

	// Initialize the hashmap with the base case where the count is zero at index -1
	hashMap.set(0, -1);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count += 1; // Increment for 1's
		} else {
			count -= 1; // Decrement for 0's
		}

		if (hashMap.has(count)) {
			// If the count has been seen before, calculate the subarray length
			maxLen = Math.max(maxLen, i - hashMap.get(count));
		} else {
			// Otherwise, store the first occurrence of this count
			hashMap.set(count, i);
		}
	}

	return maxLen;
};