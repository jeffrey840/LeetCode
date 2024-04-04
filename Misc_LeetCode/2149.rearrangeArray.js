// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var rearrangeArray = function(nums) {
//
// 	// Arrays to hold positive and negative numbers
// 	let positives = [];
// 	let negatives = [];
//
// 	// Split the nums array into positives and negatives
// 	for (let num of nums) {
// 		if (num > 0) {
// 			positives.push(num);
// 		} else {
// 			negatives.push(num);
// 		}
// 	}
//
// 	// Array to hold the rearranged elements
// 	let result = [];
//
// 	// Alternately push positive and negative numbers into the result array
// 	for (let i = 0; i < positives.length; i++) {
// 		result.push(positives[i], negatives[i]);
// 	}
//
// 	return result;
//
// };

var rearrangeArray = function(nums) {
	let result = new Array(nums.length);
	let pos = 0; // Pointer for the position of the next positive number
	let neg = 1; // Pointer for the position of the next negative number

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result[pos] = nums[i];
			pos += 2; // Move to the next position for a positive number
		} else {
			result[neg] = nums[i];
			neg += 2; // Move to the next position for a negative number
		}
	}

	return result;
};
