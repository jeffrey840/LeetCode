

function findShortestSubArray(nums) {
	// Step 1: Find the degree of the array
	let frequency = {};
	let degree = 0;
	nums.forEach(num => {
		if (frequency[num] === undefined) {
			frequency[num] = 0;
		}
		frequency[num]++;
		degree = Math.max(degree, frequency[num]);
	});

	// Step 2: Identify elements with the maximum frequency
	let maxFreqElements = new Set();
	Object.keys(frequency).forEach(num => {
		if (frequency[num] === degree) {
			maxFreqElements.add(num);
		}
	});

	// Step 3: Find the shortest subarray for each of these elements
	let minLength = Infinity;
	maxFreqElements.forEach(num => {
		let firstIndex = nums.indexOf(Number(num));
		let lastIndex = nums.lastIndexOf(Number(num));
		let length = lastIndex - firstIndex + 1;
		minLength = Math.min(minLength, length);
	});

	// Step 4: Return the minimum length among all subarrays
	return minLength;
}

// Example 1
console.log(findShortestSubArray([1,2,2,3,1])); // Output: 2

// Example 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])); // Output: 6
