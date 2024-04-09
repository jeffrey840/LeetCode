
var leftRightDifference = function(nums) {

	let leftSum =0;
	let totalSum = nums.reduce((a,b) => a+b, 0)
	let answer = []

	for(let i = 0;i < nums.length;i++) {
		let rightSum = totalSum - leftSum - nums[i];
		answer[i] = Math.abs(leftSum -rightSum)
		leftSum += nums[i]
	}
	return answer
};