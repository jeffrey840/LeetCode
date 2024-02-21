

function isSubsequence(s, t) {
	// Initialize a pointer for the position in s
	let sPos = 0;

	// Iterate through each character in t
	for (let char of t) {
		// Check if the current character matches the current position character in s
		if (sPos < s.length && char === s[sPos]) {
			// Move to the next character in s
			sPos++;
		}
	}

	// If we have gone through all characters in s, then it is a subsequence of t
	return sPos === s.length;
}
