

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
	let arr = []; // Array to hold the merged result

	let i = 0, j = 0; // Initialize pointers for word1 and word2

	// Iterate through both strings until we reach the end of one of them
	while (i < word1.length && j < word2.length) {
		arr.push(word1[i++]); // Add from word1 and increment word1's pointer
		arr.push(word2[j++]); // Add from word2 and increment word2's pointer
	}

	// If there are remaining characters in word1, add them to arr
	while (i < word1.length) {
		arr.push(word1[i++]);
	}

	// If there are remaining characters in word2, add them to arr
	while (j < word2.length) {
		arr.push(word2[j++]);
	}

	return arr.join(''); // Convert the array back to a string and return it
};


