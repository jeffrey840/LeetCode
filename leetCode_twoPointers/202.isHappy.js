function isHappy(n) {
	let seenNumbers = new Set(); // Initialize a Set to keep track of numbers we've seen

	while (n !== 1 && !seenNumbers.has(n)) { // Continue until n becomes 1 or we detect a cycle
		seenNumbers.add(n); // Add the current number to the Set
		n = sumOfSquares(n); // Replace n with the sum of squares of its digits
	}

	return n === 1; // If n is 1, the number is happy; return true. Otherwise, return false.
}

function sumOfSquares(number) {
	let sum = 0; // Initialize sum to accumulate the squares of the digits
	while (number > 0) { // Continue until there are no more digits
		let digit = number % 10; // Get the last digit of the number
		sum += digit * digit; // Square the digit and add it to the sum
		number = Math.floor(number / 10); // Remove the last digit from the number
	}
	return sum; // Return the sum of the squares of the digits
}

// Example: Checking if 19 is a happy number
console.log(isHappy(19)); // This should return true
