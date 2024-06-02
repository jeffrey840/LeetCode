function persistence(num) {
	let count = 0; // Initialize the count of iterations

	// Continue the process until num is a single digit
	while (num >= 10) {
		let digits = num.toString().split('').map(Number); // Split the number into its digits
		num = digits.reduce((a, b) => a * b, 1); // Multiply the digits together
		count++; // Increment the persistence count
	}

	return count;
}