function insertDash(num) {
	let digits = num.toString().split("").map(Number); // Convert to array of numbers
	let result = "";

	for (let i = 0; i < digits.length - 1; i++) {
		if (digits[i] % 2 === 1 && digits[i + 1] % 2 === 1) {
			result += digits[i] + "-";
		} else {
			result += digits[i];
		}
	}

	result += digits[digits.length - 1]; // Add the last digit

	return result;
}

console.log(insertDash(454793)); // Output: 4547-9-3
