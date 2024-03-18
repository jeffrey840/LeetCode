

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

	// Find the index of the first occurrence of ch
	let chIndex = word.indexOf(ch);

	// If ch is not found, return the original word
	if (chIndex === -1) {
		return word;
	}

	// Reverse the prefix from 0 to chIndex
	let prefixReversed = word.substring(0, chIndex + 1).split('').reverse().join('');

	// Concatenate the reversed prefix with the rest of the word
	return prefixReversed + word.substring(chIndex + 1);
};


