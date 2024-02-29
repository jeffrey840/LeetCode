
/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {

	const charMap = {};
	const maxHeap = new MaxPriorityQueue();

	for (let char of s) {
		charMap[char] = (charMap[char] || 0) + 1;
	}

	for (let char in charMap) {
		// Enqueue chars using their count as priority
		// Chars will be stored in descending order
		maxHeap.enqueue(char, charMap[char]);
	}

	// Check if we can distribute the first char by every other position.
	// We only need to check the first char b/c the chars are ordered by count
	// so if the first char succeeds, all following chars will succeed
	const maxChar = maxHeap.front().element;
	const maxCharCount = charMap[maxChar];
	if (maxCharCount > Math.floor((s.length + 1) / 2)) return '';

	const res = new Array(s.length);
	let position = 0;

	while (!maxHeap.isEmpty()) {
		const char = maxHeap.dequeue().element;
		const count = charMap[char];

		for (let j = 0; j < count; j++) {
			// Distribute the current char every other position. The same char
			// will never be placed next to each other even on the 2nd loop
			// for placing chars in odd positions
			res[position] = char;
			position +=2;

			// This will only happen once since total number of chars
			// will be exactly equal to the length of s
			if (position >= s.length) position = 1;
		}
	}

	return res.join('');

}

