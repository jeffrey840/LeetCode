function sliding(nums, k) {
	//code me
	if(nums.length === 0) {
		return [];
	}

	const result = [];
	const deq = [];

	for (let i = 0; i < nums.length; i++) {

		while (deq.length && nums[deq[deq.length - 1]] <= nums[i]) {
			deq.pop();
		}

		deq.push(i);

		if (deq[0] <= i - k) {
			deq.shift();
		}

		if (i >= k - 1) {
			result.push(nums[deq[0]]);
		}
	}
	return result;
}



