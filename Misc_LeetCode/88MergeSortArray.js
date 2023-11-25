function merge(nums1, m, nums2, n) {
	let index1 = m - 1;
	let index2 = n - 1;
	let mergeIndex = m + n - 1;

	while (index2 >= 0) {
		if (index1 >= 0 && nums1[index1] > nums2[index2]) {
			nums1[mergeIndex] = nums1[index1];
			index1--;
		} else {
			nums1[mergeIndex] = nums2[index2];
			index2--;
		}
		mergeIndex--;
	}
}

// Example usage
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output will be the merged array
