/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {

	let sorted = nums.sort((a,b) =>a-b,0)
	let averageArray = []
	let left = 0;
	let right = sorted.length - 1;

	while(left < right) {
		let average = (nums[left] + nums[right]) / 2
		averageArray.push(average)
		left++
		right--
	}


	return [... new Set(averageArray)].length


};