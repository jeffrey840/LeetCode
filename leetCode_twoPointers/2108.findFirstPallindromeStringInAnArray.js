/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {


	for (let i = 0; i < words.length; i++) { // Fix the loop condition
		let left = 0;
		let right = words[i].length - 1;
		let isPalindrome = true; // Assume it's a palindrome until proven otherwise

		while (left < right) {
			if (words[i][left] !== words[i][right]) {
				isPalindrome = false; // Not a palindrome if mismatch found
				break; // Exit the loop early
			}
			left++; // Move towards the center
			right--; // Move towards the center
		}

		if (isPalindrome) {
			return words[i]; // Return the first palindrome found
		}
	}
	return ""; // Return an empty string if no palindrome is found



};