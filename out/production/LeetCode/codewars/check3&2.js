function checkThreeAndTwo(arr) {
	// Create a hashmap to keep track of character counts
	const charCount = {};

	// Populate the hashmap with counts
	arr.forEach(char => {
		if (charCount[char]) {
			charCount[char] += 1;
		} else {
			charCount[char] = 1;
		}
	});

	// Check for exactly one character appearing 3 times and one character appearing 2 times
	let hasThreeOfAKind = false;
	let hasPair = false;
	for (const count of Object.values(charCount)) {
		if (count === 3) hasThreeOfAKind = true;
		if (count === 2) hasPair = true;
	}

	return hasThreeOfAKind && hasPair;
}