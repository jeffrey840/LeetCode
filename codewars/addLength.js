



function addLength(str) {

	// Split the input string into words
	const words = str.split(' ');
	// Map each word to a new string that includes the word and its length
	const result = words.map(word => `${word} ${word.length}`);
	return result;

}


console.log(addLength("apple ban"))


