function getAverages(nums, k) {
	const n = nums.length;
	const avgs = new Array(n).fill(-1); // Initialize the result array with -1
	console.log(`Initial avgs array: ${avgs}`);

	let windowSum = 0;
	for (let i = 0; i < 2 * k + 1; i++) {
		if (i < n) {
			windowSum += nums[i];
		} else {
			console.log('Initial window size is larger than the array. Returning avgs filled with -1.');
			return avgs;
		}
	}
	console.log(`Initial window sum (for the first ${2 * k + 1} elements): ${windowSum}`);

	if (2 * k < n) {
		avgs[k] = Math.floor(windowSum / (2 * k + 1));
		console.log(`Average for index ${k} (first valid center): ${avgs[k]}`);
	}

	for (let i = k + 1; i < n - k; i++) {
		windowSum += nums[i + k] - nums[i - k - 1];
		avgs[i] = Math.floor(windowSum / (2 * k + 1));
		console.log(`Window moved. New sum: ${windowSum}. Average for index ${i}: ${avgs[i]}`);
	}

	console.log(`Final avgs array: ${avgs}`);
	return avgs;
}

// Example 1
const nums1 = [7, 4, 3, 9, 1, 8, 5, 2, 6];
const k1 = 3;
console.log('Example 1:');
console.log(getAverages(nums1, k1)); // Output: [-1, -1, -1, 5, 4, 4, -1, -1, -1]

// Example 2
const nums2 = [100000];
const k2 = 0;
console.log('Example 2:');
console.log(getAverages(nums2, k2)); // Output: [100000]

// Example 3
const nums3 = [8];
const k3 = 100000;
console.log('Example 3:');
console.log(getAverages(nums3, k3)); // Output: [-1]
