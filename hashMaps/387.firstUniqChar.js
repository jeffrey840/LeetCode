/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let count = new Map();
	let n = s.length;

	// Populate the map with character counts
	for (let i = 0; i < n; i++) {
		let c = s.charAt(i);
		if (count.has(c)) {
			count.set(c, count.get(c) + 1);
		} else {
			count.set(c, 1);
		}
	}

	// Find the index of the first unique character
	for (let i = 0; i < n; i++) {
		if (count.get(s.charAt(i)) === 1) {
			return i;
		}
	}

	return -1; // Return -1 if no unique character is found
};