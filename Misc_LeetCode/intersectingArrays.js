

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

// check both arrays for repeating nums
// return array



	for(let i = 0;i <= nums1.length;i++) {
		const set1 = new Set(nums1);
		const set2 = new Set(nums2);
		return [...set1].filter(num => set2.has(num));


	}


};