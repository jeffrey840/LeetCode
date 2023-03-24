// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//
// You must write an algorithm with O(log n) runtime complexity.
//
//
//
// 	Example 1:
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


//Initialize two pointers left and right to the first and last elements of the array, respectively.

// While the left pointer is less than or equal to the right pointer:
// Find the middle index of the search space by computing the average of left and right: middle = (left + right) // 2
// Compare the target with the middle element nums[middle]:
// If they are equal, return the middle index.

// If target is greater than nums[middle], the target must be in the right half of the search space, so set left = middle + 1.
// If target is less than nums[middle], the target must be in the left half of the search space, so set right = middle - 1.
// If the target is not found after the while loop, return -1.

function search(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (nums[middle] === target) {
			return middle;
		} else if (nums[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return -1;
}