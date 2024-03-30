/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word,ch) {

	const index = word.indexOf(ch);
	if(index === -1) {
		return word
	}


	let start = 0;
	let end =index;

	let wordArray = word.split('');

	while(start< end) {

		let temp = wordArray[start];
		wordArray[start] = wordArray[end]
		wordArray[end] = temp

		start++
		end--

	}

	return wordArray.join('')

}