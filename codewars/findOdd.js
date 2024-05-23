function findOdd(arr) {
	const counts = {};  // Initialize an empty object to store the counts

	// Populate the counts object
	arr.forEach(num => {
		if (counts[num]) {
			counts[num] += 1;  // Increment the count if the number is already in the hashmap
		} else {
			counts[num] = 1;  // Initialize count to 1 if the number is not in the hashmap
		}
	});

	// Find and return the number with an odd count
	for (let num in counts) {
		if (counts[num] % 2 !== 0) {
			return parseInt(num);  // Convert the key back to an integer and return it
		}
	}
}

// Example usage
console.log(findOdd([7]));                          // Output: 7
console.log(findOdd([0]));                          // Output: 0
console.log(findOdd([1,1,2]));                      // Output: 2
console.log(findOdd([0,1,0,1,0]));                  // Output: 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));  // Output: 4
