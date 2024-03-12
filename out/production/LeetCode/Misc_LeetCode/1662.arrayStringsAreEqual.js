/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function arrayStringsAreEqual(word1,word2) {

	let concatstr1 = word1.join('')

	let concatstr2 = word2.join('')

	return concatstr1 === concatstr2;


}