





function fizzbuzz(n){



	let result = []; // Initialize an empty array to hold the result

	for (let i = 1; i <= n; i++) {
		// Check if the current number i is a multiple of both 3 and 5
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
		}
		// Check if the current number i is a multiple of 3
		else if (i % 3 === 0) {
			result.push("Fizz");
		}
		// Check if the current number i is a multiple of 5
		else if (i % 5 === 0) {
			result.push("Buzz");
		}
		// If none of the above conditions are met, push the number itself
		else {
			result.push(i);
		}
	}

	return result; // Return the filled result array

}

console.log(fizzbuzz(3))
