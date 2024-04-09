/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
	let sum = 0;
	let maxSum = 0;

	// Calculate the sum of the first k elements
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	// This is the max sum for the first window
	maxSum = sum;
	console.log(`Initial sum for the first ${k} elements: ${sum}`);

	// Start from the kth element and slide the window to the right
	for (let i = k; i < nums.length; i++) {
		// Add the current element and remove the leftmost element from the sum
		sum = sum + nums[i] - nums[i - k];
		console.log(`Current window [${i-k+1}...${i}] sum: ${sum}`);

		// Update maxSum if the current sum is greater
		if (sum > maxSum) {
			console.log(`New max sum found: ${sum}`);
			maxSum = sum;
		}
	}

	console.log(`Maximum sum found: ${maxSum}`);
	console.log(`Maximum average: ${maxSum / k}`);
	// Return the maximum average
	return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // Expected output: 12.75
