// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
//
// 	Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
//
//
//
// 	Example 1:
//
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
//
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// returns a number
// make every letter to a lowercase or uppercase


function longestPalindrome(s) {
	//First, we initialize an empty object called counts to store the count of each letter in the input string s.
	const counts = {};

	//We then loop through each character in the input string s, and update the corresponding count in the counts object. If the character hasn't been seen before, we initialize its count to 1.
	for (let i = 0; i < s.length; i++) {
		if (s[i] in counts) {
			counts[s[i]]++;
		} else {
			counts[s[i]] = 1;
		}
	}

	//Next, we initialize a variable called result to store the length of the longest palindrome that can be built using the letters in the input string. We also initialize a boolean variable called hasOdd to keep track of whether we've seen any letters with odd counts.
	let result = 0;
	let hasOdd = false;

	//We loop through each count in the counts object using the Object.values() method, and add up the counts of all the letters that occur an even number of times. If we encounter a letter that occurs an odd number of times, we add count - 1 to the result (since we can use pairs of that letter to form a palindrome), and set hasOdd to true.
	for (let count of Object.values(counts)) {
		if (count % 2 === 0) {
			result += count;
		} else {
			result += count - 1;
			hasOdd = true;
		}
	}

	//If we've seen any letters with odd counts, we can add one more letter to the palindrome as its center, so we add 1 to the result.
	if (hasOdd) {
		result += 1;
	}

	//Finally, we return the result as the length of the longest palindrome that can be built using the letters in the input string.
	return result;
}
