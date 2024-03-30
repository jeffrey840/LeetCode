function reverseOnlyLetters(s) {
	// Convert the string to an array to easily swap characters
	let chars = s.split('');
	let left = 0;
	let right = s.length - 1;

	// Function to check if a character is an English letter
	function isLetter(c) {
		return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
	}

	// Use two pointers to reverse only letters
	while (left < right) {
		// Move left pointer to the right if it's not pointing to a letter
		while (left < right && !isLetter(chars[left])) {
			left++;
		}
		// Move right pointer to the left if it's not pointing to a letter
		while (right > left && !isLetter(chars[right])) {
			right--;
		}
		// Swap letters and move pointers
		if (left < right) {
			let temp = chars[left];
			chars[left] = chars[right];
			chars[right] = temp;
			left++;
			right--;
		}
	}

	// Convert the array back to a string and return it
	return chars.join('');
}

// Test cases
console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"
