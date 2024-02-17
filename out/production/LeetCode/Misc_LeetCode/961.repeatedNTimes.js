function repeatedNTimes(nums) {
	const counts = {};
	for (let num of nums) {
		counts[num] = (counts[num] || 0) + 1;
		if (counts[num] === nums.length / 2) {
			return num;
		}
	}

	return null;
}


