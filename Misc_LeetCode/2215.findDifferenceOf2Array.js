

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
	// Create Sets from the arrays for efficient look-up and to eliminate duplicates
	const setNums1 = new Set(nums1);
	const setNums2 = new Set(nums2);

	// Find elements in nums1 not in nums2
	const uniqueToNums1 = [...setNums1].filter(num => !setNums2.has(num));

	// Find elements in nums2 not in nums1
	const uniqueToNums2 = [...setNums2].filter(num => !setNums1.has(num));

	// Combine the results
	const answer = [uniqueToNums1, uniqueToNums2];

	return answer;

};