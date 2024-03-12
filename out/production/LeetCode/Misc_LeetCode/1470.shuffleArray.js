



/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {


	let result = []; // This will store the final shuffled array.

	for (let i = 0; i < n; i++) {
		result.push(nums[i]); // Add the ith element from the first half.
		result.push(nums[i + n]); // Add the ith element from the second half.
	}

	return result;

}

console.log(shuffle([2,5,1,3,4,7],3))