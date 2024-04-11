function minPairSum(nums) {
	nums.sort((a, b) => a - b); // Sort in ascending order
	console.log("Sorted array:", nums);

	let maxPairSum = 0;
	for (let i = 0; i < nums.length / 2; i++) {
		let pairSum = nums[i] + nums[nums.length - 1 - i];
		console.log(`Pairing: (${nums[i]}, ${nums[nums.length - 1 - i]}) with sum ${pairSum}`);
		maxPairSum = Math.max(maxPairSum, pairSum);
		console.log(`Current maximum pair sum: ${maxPairSum}`);
	}

	console.log("Final maximum pair sum:", maxPairSum);
	return maxPairSum;
}

// Example usage
nums = [3, 5, 2, 3];
minPairSum(nums);
