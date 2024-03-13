/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s,t) {

	// Anagrams must be the same length
	if (s.length !== t.length) {
		return false;
	}

	// Count the frequency of each character in s
	const countS = {};
	for (const char of s) {
		countS[char] = (countS[char] || 0) + 1;
	}

	// Verify t has the same frequency of characters
	for (const char of t) {
		if (!countS[char]) { // If t has a char not in s or differing frequency
			return false;
		}
		countS[char] -= 1;
	}

	return true;
}