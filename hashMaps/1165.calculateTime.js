/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
	// Creating a mapping of characters to their indices
	let map = {};
	for (let i = 0; i < keyboard.length; i++) {
		map[keyboard[i]] = i;
	}

	// Initial position of the finger at the start of the keyboard
	let totalTime = 0;
	let currentPosition = 0;

	// Calculate the total movement time
	for (let char of word) {
		let nextPosition = map[char];
		totalTime += Math.abs(nextPosition - currentPosition);
		currentPosition = nextPosition;
	}

	return totalTime;
};