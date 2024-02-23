


function findIntersectionValues(nums1, nums2) {
	// Convert nums2 to a Set for efficient existence checks
	const set2 = new Set(nums2);

	// Count nums1 elements that occur in nums2
	let count1 = 0;
	nums1.forEach(element => {
		if (set2.has(element)) {
			count1++;
		}
	});

	// Convert nums1 to a Set to avoid counting duplicates and for efficient existence checks
	const set1 = new Set(nums1);

	// Count nums2 elements that occur in nums1
	let count2 = 0;
	nums2.forEach(element => {
		if (set1.has(element)) {
			count2++;
		}
	});

	// Return the counts as an array
	return [count1, count2];
}

console.log(findIntersectionValues([4,3,3,3,2,3,1], [2,2,5,2,3,6]))