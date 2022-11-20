// Given a string s, find the length of the longest substring
// without repeating characters.
//
//
//
// 	Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
// 	Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

let lengthOfLongestSubstring = function (s) {
	// Initialise a set to store the longest string in
	let longestStringLength = 0;

	// Loop through the provided string
	for (let i = 0; i < s.length; i++) {
		// Initialise a set to store the string created from the current point
		let currentStringSet = new Set();

		// Loop through the letters from the current point
		for (let x = i; x < s.length; x++) {
			// Check if the current letter exists in the current Set
			if (currentStringSet.has(s[x])) {
				// Move on from the current letter without adding it (as it already exists in the set)
				break;
			} else {
				// Character not found, add it to the set
				currentStringSet.add(s[x]);
			}
		}

		// Update the longest string length (if this one was bigger)
		longestStringLength = Math.max(
			longestStringLength,
			currentStringSet.size
		);
	}

	return longestStringLength;
};


console.log(lengthOfLongestSubstring("threerhtthreerhtthreerhtthreerht"));
//The answer is "thre", with the length of 4.