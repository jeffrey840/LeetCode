/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

	const n = grid.length;

	// Find the repeating element using a Set for potential lookup improvements
	const seenNumbers = new Set();
	let repeated = null;
	for (let row of grid) {
		for (let num of row) {
			if (seenNumbers.has(num)) {
				repeated = num;
				break;
			}
			seenNumbers.add(num);
		}
	}

	// Find the missing element using the sum formula
	const expectedSum = (n * (n + 1)) / 2;
	let actualSum = 0;
	for (let row of grid) {
		for (let num of row) {
			actualSum += num;
		}
	}
	const missing = expectedSum - actualSum;

	return [repeated, missing];
};