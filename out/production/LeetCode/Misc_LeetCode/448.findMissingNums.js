

function findDisappearedNumbers(nums) {


	let numSet = new Set(nums);
	let result = [];

	// Log initial state
	console.log(`Initial nums: ${nums}`);
	console.log(`Unique numbers in nums:`, numSet);

	// Iterate from 1 to n (inclusive)
	for (let i = 1; i <= nums.length; i++) {
		// If the Set does not have the current number, add it to the result
		if (!numSet.has(i)) {
			result.push(i);
		}
	}

	// Log the result
	console.log(`Missing numbers: ${result}`);

	return result;
}

// Example usage
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5,6]
console.log(findDisappearedNumbers([1,1])); // Output: [2]