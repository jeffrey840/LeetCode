function solution(a) {

	let sortedHeights = a.filter(height => height !== -1).sort((a, b) => a - b);

	// Index to track the sorted heights
	let heightIndex = 0;

	// Replace the heights in the original array, keeping the trees fixed
	return a.map(element => {
		if (element !== -1) {
			return sortedHeights[heightIndex++];
		} else {
			return -1;  // Keep the tree positions unchanged
		}
	});

}
