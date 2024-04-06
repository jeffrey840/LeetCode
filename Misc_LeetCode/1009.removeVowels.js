/**
 * @param {string} s
 * @return {string}
 */
function removeVowels(s) {
	const vowels = 'aeiou';
	return s.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
}