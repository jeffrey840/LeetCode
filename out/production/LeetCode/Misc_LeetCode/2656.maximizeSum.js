
var maximizeSum = function(nums, k) {

	let score = 0;

	for(let i =0;i<k;i++) {
		let maxIndex = 0;

		for(let j =0;j< nums.length;j++) {
			if(nums[j] > nums[maxIndex])
			{
				maxIndex = j
			}
		}
		score += nums[maxIndex]
		nums[maxIndex] +=1
	}
	return score
};