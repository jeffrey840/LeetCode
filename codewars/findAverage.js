function findAverage(nums) {

	if(nums.length === 1) return nums[0]

	return nums.reduce((a,b) => a+b) / nums.length
}