/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

	let elSum = nums.reduce((a,b) => a+b,0)

	let digitSum = 0;
	for(let i=0;i < nums.length;i++) {
		let numAsString = nums[i].toString();
		for(let j = 0;j < numAsString.length;j++) {
			digitSum +=parseInt(numAsString[j], 10)
		}
	}

	return Math.abs(elSum - digitSum)

};