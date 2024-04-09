/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	const result = [];
	const sortedNums = [...nums].sort((a, b) => a - b); // Create a sorted copy

	for (let i = 0; i < nums.length; i++) {
		const originalIndex = sortedNums.findIndex(num => num === nums[i]);
		result.push(originalIndex); // Number of smaller elements is its index
	}

	return result;
};