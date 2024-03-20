function reverseOnlyLetters(s) {
	const letters = s.split(''); // Convert to array for easier manipulation
	let left = 0;
	let right = letters.length - 1;

	while (left < right) {
		// Skip non-letters on the left
		while (left < right && !isLetter(letters[left])) {
			left++;
		}

		// Skip non-letters on the right
		while (left < right && !isLetter(letters[right])) {
			right--;
		}

		// If both pointers are on letters, swap and move inward
		if (left < right) {
			[letters[left], letters[right]] = [letters[right], letters[left]];
			left++;
			right--;
		}
	}

	return letters.join(''); // Convert back to string
}

// Helper function to check if a character is an English letter
function isLetter(char) {
	return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

// Test Cases
console.log(reverseOnlyLetters("ab-cd"));        // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));// "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"
