function findMyGlasses(list) {
	// Define the regular expression pattern to match 'O-O' with one or more dashes in between
	const pattern = /O-+O/;

	// Iterate through the list to find the pattern
	for (let i = 0; i < list.length; i++) {
		if (pattern.test(list[i])) {
			// If the pattern matches, return the current index
			return i;
		}
	}

	// Return -1 if no matching pattern is found
	return -1;
}

// Example usage
console.log(findMyGlasses(["phone", "O-O", "coins", "keys"]));  // Output: 1
console.log(findMyGlasses(["OO", "wallet", "O##O", "O----O"]));





