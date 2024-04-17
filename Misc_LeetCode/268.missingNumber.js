/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

	let nlength = nums.length

	let nSum = (nlength*(nlength +1))/2

	for (let i = 0; i < nlength; i++) {
		nSum -= nums[i];
	}
	return nSum;

};