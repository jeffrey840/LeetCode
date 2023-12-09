// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
// 	0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// 	nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
//
//
//
// 	Example 1:
//
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:
//
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
//
//
// Constraints:
//
// 	1 <= nums.length <= 200
// 	-109 <= nums[i] <= 109
// 	-109 <= target <= 109


const fourSum = function (nums, target) {
	nums.sort((a, b) => a - b)
	const results = []
	kSum(nums, target, 4, 0, [], results)
	return results
}

function kSum(nums, target, k, i, acc, results) {
	if (nums[i] * k > target || nums[nums.length - 1] * k < target) return
	if (k > 2) {
		for (let j = i; j <= nums.length - k; j++) {
			if (j == i || nums[j] > nums[j - 1])
				kSum(nums, target - nums[j], k - 1, j + 1, [...acc, nums[j]], results)
		}
	} else {
		twoSum(nums, target, i, acc, results)
	}
}

function twoSum(nums, target, i, acc, results) {
	let lo = i
	let hi = nums.length - 1
	while (lo < hi) {
		const sum = nums[lo] + nums[hi]
		if (sum == target) {
			results.push([...acc, nums[lo], nums[hi]])
			while (nums[lo] == nums[lo + 1]) lo++
			while (nums[hi] == nums[hi - 1]) hi--
			lo++
			hi--
		} else if (sum < target) {
			lo++
		} else {
			hi--
		}
	}
}
