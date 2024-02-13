

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	// low to highest
	// remove the negative
	// sort low to highest
	// multiply py itself
	// return an array

	let left = 0, right = nums.length - 1;
	let result = new Array(nums.length);
	for (let i = nums.length - 1; i >= 0; i--) {
		if (Math.abs(nums[left]) > Math.abs(nums[right])) {
			result[i] = nums[left] ** 2;
			left++;
		} else {
			result[i] = nums[right] ** 2;
			right--;
		}
	}
	return result;

};

