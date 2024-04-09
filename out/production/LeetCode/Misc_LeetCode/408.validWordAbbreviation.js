/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
	let wordIndex = 0, abbrIndex = 0;

	while (wordIndex < word.length && abbrIndex < abbr.length) {
		if (abbr[abbrIndex] >= '0' && abbr[abbrIndex] <= '9') {
			// Leading zeros are not allowed
			if (abbr[abbrIndex] === '0') {
				return false;
			}
			let num = 0;
			// Build the number from digits in abbr
			while (abbrIndex < abbr.length && !isNaN(parseInt(abbr[abbrIndex], 10))) {
				num = num * 10 + parseInt(abbr[abbrIndex], 10);
				abbrIndex++;
			}
			// Skip 'num' characters in the word
			wordIndex += num;
		} else {
			// If the current characters in word and abbr do not match, return false
			if (word[wordIndex] !== abbr[abbrIndex]) {
				return false;
			}
			wordIndex++;
			abbrIndex++;
		}
	}






	// Both the word and abbr should be fully traversed
	return wordIndex === word.length && abbrIndex === abbr.length;
};
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // true
console.log(validWordAbbreviation("apple", "a2e")); // false