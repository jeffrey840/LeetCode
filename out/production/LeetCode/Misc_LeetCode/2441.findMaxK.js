/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
	const seenNumbers = new Set();
	let largestK = -1;

	for (const num of nums) {
		if (seenNumbers.has(-num)) {
			largestK = Math.max(largestK, Math.abs(num));
		} else {
			seenNumbers.add(num);
		}
	}

	return largestK;
};