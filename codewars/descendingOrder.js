function descendingOrder(n){
	// Convert the number to a string, then to an array of its digits
	let digits = n.toString().split('');

	// Sort the array in descending order
	digits.sort((a, b) => b - a);

	// Join the array back into a string and convert it to a number
	let sortedNumber = parseInt(digits.join(''), 10);

	return sortedNumber;
}