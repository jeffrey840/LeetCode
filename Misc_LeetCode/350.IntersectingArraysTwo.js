function intersect(nums1, nums2) {
	const map = {};
	const result = [];

	console.log("Building frequency map for nums1:");
	// Count the occurrences of each number in nums1
	for (let num of nums1) {
		if (map[num] == null) map[num] = 0;
		map[num]++;
		console.log(`Number: ${num}, Count: ${map[num]}`);
	}

	console.log("Finding intersection with nums2:");
	// Find common numbers and decrease their count in the map
	for (let num of nums2) {
		if (map[num] > 0) {
			result.push(num);
			map[num]--;
			console.log(`Common Number: ${num}, Remaining Count in nums1: ${map[num]}`);
		}
	}

	console.log("Result:", result);
	return result;
}

// Example 1
console.log("Example 1:");
intersect([1,2,2,1], [2,2]); // Output: [2,2]

// Example 2
console.log("\nExample 2:");
intersect([4,9,5], [9,4,9,8,4]); // Output: [4,9] or [9,4]
