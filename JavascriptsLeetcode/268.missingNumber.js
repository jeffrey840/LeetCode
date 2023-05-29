
function missingNumber(nums) {
	const n = nums.length;
	let expectedSum = (n * (n + 1)) / 2;
	console.log(n)
	console.log(expectedSum)

	for (let i = 0; i < nums.length; i++) {
		expectedSum = expectedSum - nums[i];
	}

	return expectedSum;
}






