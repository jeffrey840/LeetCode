

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function isConsecutive(nums) {


	const minVal = Math.min(...nums);


	const n = nums.length;
	const expectedMaxVal = minVal + n - 1;

	const uniqueNums = new Set(nums);
	if (uniqueNums.size !== n) {
		return false;
	}

	return Math.max(...nums) === expectedMaxVal;

}


console.log(isConsecutive([1,3,4,2]))
