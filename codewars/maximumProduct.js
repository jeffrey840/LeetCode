function adjacentElementsProduct(array) {
	if(array.length < 2) return 0; // If array has less than 2 elements, can't find a product.

	// Initialize maxProduct with the product of the first two elements.
	let maxProduct = array[0] * array[1];

	// Loop through the array starting from the second element.
	for(let i = 1; i < array.length - 1; i++) {
		// Calculate the product of current and next element.
		const product = array[i] * array[i + 1];
		// Update maxProduct if the current product is greater.
		if(product > maxProduct) {
			maxProduct = product;
		}
	}

	return maxProduct;
}