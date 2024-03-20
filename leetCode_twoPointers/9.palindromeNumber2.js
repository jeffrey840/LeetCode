function isPalindrome(x) {
	// Negative numbers are not palindromes because of the minus sign
	if (x < 0) return false;

	// Convert the number to an array of its digits
	let digits = Array.from(String(x), Number);

	// Initialize two pointers
	let left = 0;
	let right = digits.length - 1;

	// Iterate over the array of digits with two pointers
	while (left < right) {
		// Compare the digits at the current positions of the two pointers
		if (digits[left] !== digits[right]) {
			// If they don't match, it's not a palindrome
			return false;
		}
		// Move the pointers towards the center
		left++;
		right--;
	}

	// If all the digits match, it's a palindrome
	return true;
}

// Example tests
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
