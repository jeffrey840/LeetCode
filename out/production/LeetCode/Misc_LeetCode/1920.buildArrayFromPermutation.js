
function buildArray(nums) {

	let ans = [];

	for(i in nums) {
		ans[i] = nums[nums[i]]
	}
	return ans

}
