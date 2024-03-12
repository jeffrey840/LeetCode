/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

// for ever  number is ciunted they will be in storage


	let count = 0;
	let candidate = null;

	for (let num of nums) {
		if (count === 0) {
			candidate = num;
		}
		count += (num === candidate) ? 1 : -1;
	}

	// The candidate is the majority element
	return candidate;

};