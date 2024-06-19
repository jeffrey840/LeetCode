function divisors(integer) {
	let divisorsArray = []; // Array to store divisors

	// Loop to find divisors, from 2 to the square root of the integer
	for (let i = 2; i <= Math.sqrt(integer); i++) {
		if (integer % i === 0) { // Check if i is a divisor of integer
			divisorsArray.push(i); // Add i to the array
			if (i !== integer / i) { // Add the complementary divisor if it's not the square root
				divisorsArray.push(integer / i);
			}
		}
	}

	// Sort the divisors in ascending order
	divisorsArray.sort((a, b) => a - b);

	// Determine the output based on whether any divisors were found
	if (divisorsArray.length === 0) {
		return `${integer} is prime`; // Return prime statement if no divisors found
	} else {
		return divisorsArray; // Return the sorted array of divisors
	}
}
