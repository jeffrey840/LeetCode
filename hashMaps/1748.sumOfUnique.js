/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

	const counts = {};

	nums.forEach(num => {
		counts[num] = (counts[num] || 0) + 1;
	})

	return nums.filter(num => counts[num] === 1).reduce((sum, num) => sum + num,0)

};