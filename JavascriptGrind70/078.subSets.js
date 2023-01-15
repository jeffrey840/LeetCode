// Given an integer array nums of unique elements, return all possible
// subsets
// (the power set).
//
// The solution set must not contain duplicate subsets. Return the solution in any order.
//
//
//
// 	Example 1:
//
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:
//
// Input: nums = [0]
// Output: [[],[0]]
//
//
// Constraints:
//
// 	1 <= nums.length <= 10
// 	-10 <= nums[i] <= 10
// All the numbers of nums are unique.

//build out a tree
//start at the 0 index
/*

nums=[1,2,3]

left will exclude, right will include

				[][1], go to the next index

			[][2] [1][2], go to next index

[0][3]  [2][2,3] [1][1,3] [1,2][1,2,3]
* */

var subsets = function(nums) {

	//global result
	const result = [];

	//dfs recursive helper
	const dfs = (i, nums, slate) => {
		if(i === nums.length) {
			result.push(slate.slice());
			return;
		}

		//dfs recursive case
		//exclude
		dfs(i + 1, nums,slate);

		//include
		slate.push(nums[i]);
		dfs(i + 1,nums, slate);
		slate.pop();

	}
	dfs(0,nums,[]);
	return result;
};
