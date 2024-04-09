function pigIt(str) {
	// Split the string into words
	const words = str.split(' ');

	// Transform each word
	const transformedWords = words.map(word => {

		if (word.toLowerCase() !== word.toUpperCase()) {
			// Move the first letter to the end and add "ay"
			return word.slice(1) + word[0] + 'ay';
		}
		return word; // Return the punctuation mark or non-alphabetic word untouched
	});

	// Join the transformed words back into a string
	return transformedWords.join(' ');
}