/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

	let hashMap = new Map();

	for(const letter of text) {

		if(hashMap.has(letter)) {
			hashMap.set(letter, hashMap.get(letter) + 1);

		} else{
			hashMap.set(letter, 1)
		}
	}
	let maxBallon = Infinity;
	const word = "balloon"

	for(const char of word) {
		if(hashMap.has(char)) {
			let countInText = hashMap.get(char);
			if(char === 'l' || char === 'o') {
				countInText = Math.floor(countInText /2);
			}
			maxBallon = Math.min(maxBallon, countInText);
		} else{
			return 0;
		}
	}
	return maxBallon;
};