function mergeStrings(first, second){
	// Determine the maximum possible length of overlap
	let maxOverlap = Math.min(first.length, second.length);

	// Iterate from the maximum possible overlap down to 0 to find the longest match
	for (let i = maxOverlap; i > 0; i--) {
		// Check if the end of the first string matches the start of the second string for the current length i
		if (first.endsWith(second.substring(0, i))) {
			// If a match is found, return the merged string
			return first + second.substring(i);
		}
	}

	// If no overlap is found, simply concatenate the strings
	return first + second;
}





