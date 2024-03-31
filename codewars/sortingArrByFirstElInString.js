function sortArray(a1, a2) {
	// Create the mapping from the first letter to index for a1
	const letterToIndex = {};
	a1.forEach((word, index) => {
		letterToIndex[word[0]] = index;
	});

	// Sort a2 by the index found in the mapping
	a2.sort((a, b) => {
		const indexA = letterToIndex[a[0]];
		const indexB = letterToIndex[b[0]];
		return indexA - indexB;
	});

	return a2;

}