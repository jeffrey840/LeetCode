
var minProductSum = function(nums1, nums2) {
	// Sort nums1 in ascending order
	nums1.sort((a, b) => a - b);
	console.log(nums1)
	// Sort nums2 in descending order
	nums2.sort((a, b) => b - a);
	console.log(nums2)
	// Calculate the product sum
	let productSum = 0;
	for (let i = 0; i < nums1.length; i++) {
		productSum += nums1[i] * nums2[i];
	}

	return productSum;
};