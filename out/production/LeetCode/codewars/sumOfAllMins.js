function sumOfMinimums(arr) {

	let sum = 0; // Initialize sum to 0

	// Loop through each row of the array
	for (let i = 0; i < arr.length; i++) {
		// Add the minimum value of the current row to sum
		sum += Math.min(...arr[i]);
	}

	return sum; // Return the sum of minimums

}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))