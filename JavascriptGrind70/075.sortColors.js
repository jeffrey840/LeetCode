// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//
// 	We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//
// 	You must solve this problem without using the library's sort function.
//
//
//
// Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
//
// Input: nums = [2,0,1]
// Output: [0,1,2]
//
//
// Constraints:
//
// 	n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// 0=red
// 1=white
// 2=blue

//move all the 1 to fromt move all 2 to the back

var sortColors = function(nums) {

	if(nums.length === 0 || nums.length === 1) return;

	let start = 0;//left most index
	let end = nums.length -1;//right most index
	let index = 0//index to loop

	while(index <= end && start < end){

		if(nums[index] === 0) {
			nums[index] = nums[start];
			nums[start] = 0;
			start++;
			index++;
		//	pushing 2 to the back
		} else if (nums[index] === 2) {
			nums[index] = nums[end];
			nums[end] = 2;
			end--;
		} else {
			index++;
		}
	}
};


