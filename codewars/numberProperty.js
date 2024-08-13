function numberProperty(n) {
// Check if the number is prime
	function isPrime(num) {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}

	// Check if the number is even
	function isEven(num) {
		return num % 2 === 0;
	}

	// Check if the number is a multiple of 10
	function isMultipleOfTen(num) {
		return num % 10 === 0;
	}

	// Return the results as an array
	return [isPrime(n), isEven(n), isMultipleOfTen(n)];
}