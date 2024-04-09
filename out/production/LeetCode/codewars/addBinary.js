var addBinary = function(a, b) {
	// Convert binary strings to BigInt
	const numA = BigInt("0b" + a);
	const numB = BigInt("0b" + b);

	// Add the numbers
	const sum = numA + numB;

	// Convert the sum back to a binary string and remove the '0b' prefix
	return sum.toString(2);
};