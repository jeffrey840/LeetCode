function intersect(nums1, nums2) {
	const frequencyMap = new Map();
	const result = [];

	for (const num of nums1) {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
	}

	for (const num of nums2) {
		if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
			result.push(num);
			frequencyMap.set(num, frequencyMap.get(num) - 1);
		}
	}

	return result;
}
