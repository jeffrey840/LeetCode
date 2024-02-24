


/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {

	if (n === 1) return "1"; // Base case
	if (n === 2) return "11"; // Second base case for clarity

	let str = "11"; // Starting from the second term

	for (let i = 3; i <= n; i++) {
		// Initialize the next term as an empty string and add a dummy character at the end of the current string to ease processing
		let nextTerm = "";
		str += '$';
		let count = 1; // To count the number of occurrences of a digit

		for (let j = 1; j < str.length; j++) {
			// If current digit is same as previous one, increment the count
			if (str[j] === str[j-1]) {
				count++;
			} else {
				// If current digit is different, append the count and previous digit to nextTerm
				nextTerm += count + str[j-1];
				count = 1; // Reset count for the new digit
			}
		}

		// Update str with the newly generated term for the next iteration
		str = nextTerm;
	}

	return str;

}