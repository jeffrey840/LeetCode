function buildArray(nums) {
	const n = nums.length;
	const ans = new Array(n);

	for (let i = 0; i < n; i++) {
		ans[i] = nums[nums[i]];
	}

	return ans;
}




