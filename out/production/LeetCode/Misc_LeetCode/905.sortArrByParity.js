function sortArrayByParity(nums) {
	console.log("Original array:", nums);
	let i = 0; // Start pointer for the beginning of the array
	let j = nums.length - 1; // Start pointer for the end of the array

	while (i < j) {
		// Check if the current number at i is odd and the number at j is even
		if (nums[i] % 2 > nums[j] % 2) {
			// Swap nums[i] and nums[j]
			let temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
		}

		// If the number at i is even, move i to the right
		if (nums[i] % 2 === 0) i++;
		// If the number at j is odd, move j to the left
		if (nums[j] % 2 === 1) j--;

		console.log(`After iteration: ${nums}`);
	}

	console.log("Sorted array by parity:", nums);
	return nums;
}