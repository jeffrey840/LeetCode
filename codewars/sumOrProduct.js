function sumOrProduct(array, n) {
	// Sort the array in ascending order
	array.sort((a, b) => a - b);

	// Calculate the sum of the n largest numbers
	const sumLargest = array.slice(-n).reduce((sum, num) => sum + num, 0);

	// Calculate the product of the n smallest numbers
	const productSmallest = array.slice(0, n).reduce((product, num) => product * num, 1);

	// Compare the two results
	if (sumLargest > productSmallest) {
		return "sum";
	} else if (productSmallest > sumLargest) {
		return "product";
	} else {
		return "same";
	}
}



