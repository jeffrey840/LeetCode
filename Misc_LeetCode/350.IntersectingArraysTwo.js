

var intersect = function(nums1, nums2) {

	const map = {};
	const result = [];

	// Count the occurrences of each number in nums1
	for (let num of nums1) {
		if (map[num] == null) map[num] = 0;
		map[num]++;
	}

	// Find common numbers and decrease their count in the map
	for (let num of nums2) {
		if (map[num] > 0) {
			result.push(num);
			map[num]--;
		}
	}

	return result;

};