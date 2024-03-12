


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {

	const n = nums.length; // Number of elements in the array `nums`

	// Iterate through the array
	for (let i = 0; i < n; i++) {
		// Check if any pair of elements' bitwise OR results in a number with trailing zeros (even number)
		for (let j = 0; j < n; j++) {
			if (i !== j && (nums[i] | nums[j]) % 2 === 0) {
				return true; // Return true if such a pair is found
			}
		}
	}

	return false; // Return false if no such pair is found



};