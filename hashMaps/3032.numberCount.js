/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
	let count = 0;

	// Iterate over each number from a to b
	for (let i = a; i <= b; i++) {
		if (hasUniqueDigits(i)) {
			count++;
		}
	}
	return count;
}

function hasUniqueDigits(num) {
	const digits = new Set();
	const numStr = num.toString();

	// Check each digit in the number
	for (let char of numStr) {
		if (digits.has(char)) {
			return false; // Duplicate digit found
		}
		digits.add(char);
	}
	return true; // No duplicates, digits are unique
};