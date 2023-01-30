// Given an array nums of size n, return the majority element.
//
// 	The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//
//
// 	Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// retrun the highest num

// hashmap is used to keep track of the number of ccurances


var majorityElement = function(nums) {

	let obj = {};
	let count = 0;
	let max = 0;

	//this is the hashmap
	for(let i of nums) {
		if (!obj[i]) {
			obj[i] = 1
		} else {
			obj[i]++
		}
	}

	for(let j in obj) {
		if(obj[j] > count) {
			count  = obj[j]
			max = j
		}
	}
return max
	// console.log(obj)
};