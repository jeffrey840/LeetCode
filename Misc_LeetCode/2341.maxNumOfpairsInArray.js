// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var numberOfPairs = function(nums) {
// 	const countMap = new Map();
//
// 	// Count occurrences of each number
// 	for (const num of nums) {
// 		countMap.set(num, (countMap.get(num) || 0) + 1);
// 	}
//
// 	let pairs = 0;
// 	let leftovers = 0;
//
// 	// Calculate pairs and leftovers
// 	for (const count of countMap.values()) {
// 		pairs += Math.floor(count / 2);
// 		leftovers += count % 2;
// 	}
//
// 	return [pairs, leftovers];
// };

function numberOfPairs(nums) {
	// Sort the array so that equal elements are adjacent
	nums.sort((a, b) => a - b);

	let pairs = 0;
	let i = 0;

	// Iterate through the array to count pairs
	while (i < nums.length - 1) {
		if (nums[i] === nums[i + 1]) {
			// Found a pair, increment the pairs count and skip the next element
			pairs++;
			i += 2;
		} else {
			// Not a pair, move to the next element
			i++;
		}
	}

	// The number of leftovers is the array's length minus twice the number of pairs
	let leftovers = nums.length - pairs * 2;

	return [pairs, leftovers];
}

// Example 1
console.log(numberOfPairs([1,3,2,1,3,2,2])); // Output: [3,1]

// Example 2
console.log(numberOfPairs([1,1])); // Output: [1,0]

// Example 3
console.log(numberOfPairs([0])); // Output: [0,1]
