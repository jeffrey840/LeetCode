/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

	let nextGreaterMap = new Map();

	let stack = [];

	for(let i = nums2.length - 1;i >= 0;i--) {
		while(stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
			stack.pop();
		}
		nextGreaterMap.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
		stack.push(nums2[i])
	}
	let result = nums1.map(num => nextGreaterMap.get(num))

	return result;
};