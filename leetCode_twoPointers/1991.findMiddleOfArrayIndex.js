/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
	let left = 0;
	let right = nums.reduce((a, b) => a + b, 0); // Start right sum with 0

	for (let i = 0; i < nums.length; i++) {
		right -= nums[i];
		if (left === right) {
			return i;
		}
		left += nums[i];
	}

	return -1;
};