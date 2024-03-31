/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	let maxWords = 0; // This will keep track of the maximum word count found

	// Loop through each sentence
	for(let i = 0; i < sentences.length; i++) {
		// Split the sentence into words using a space as the separator
		let wordCount = sentences[i].split(' ').length;

		// Compare the count of words in the current sentence to the max found so far
		if(wordCount > maxWords) {
			maxWords = wordCount; // Update maxWords if the current count is greater
		}
	}

	// Return the maximum number of words found
	return maxWords;

};