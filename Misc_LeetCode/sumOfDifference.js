function sumOfDifferences(arr) {

	if (arr.length <= 1) {
		return 0;
	}
	// Sort the array in descending order
	arr.sort((a, b) => b - a);
	console.log(arr)
	// Return the difference between the first and last elements
	return arr[0] - arr[arr.length - 1];
}



