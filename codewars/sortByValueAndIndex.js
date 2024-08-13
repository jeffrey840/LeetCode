function sortByValueAndIndex(array) {
	// Create an array of objects to store value, index, and their product
	const valueIndexProduct = array.map((value, index) => ({
		value,
		index: index + 1, // Index starts at 1
		product: value * (index + 1)
	}));

	// Sort the array based on the 'product' property
	valueIndexProduct.sort((a, b) => a.product - b.product);

	// Extract the original values from the sorted array
	const sortedArray = valueIndexProduct.map(item => item.value);

	return sortedArray;
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // Output: [2, 3, 4, 23, 5]
