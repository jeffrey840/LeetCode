function missingNo(nums) {
	// Calculate the expected sum of numbers from 0 to 100
	const expectedSum = (100 * 101) / 2;

	// Calculate the actual sum of numbers in the array
	const actualSum = nums.reduce((sum, num) => sum + num, 0);

	// The missing number is the difference between expected and actual sums
	return expectedSum - actualSum;
}