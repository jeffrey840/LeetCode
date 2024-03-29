/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

	// Counter to count the number of even digit integers
	let evenDigitCount = 0;

	for (let num of nums) {
		// Convert num to string and find its length
		let length = num.toString().length;
		if (length % 2 == 0)
			evenDigitCount++;
	}

	return evenDigitCount;

};