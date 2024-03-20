/**
 * Finds the shortest distance to the character 'c' for each character in the string 's'.
 * @param {string} s The input string.
 * @param {char} c The character to find the distance to.
 * @return {number[]} An array of distances.
 */
var shortestToChar = function(s, c) {
	let n = s.length;
	let answer = new Array(n).fill(Infinity);
	let position = -Infinity;

	console.log(`Input string: ${s}`);
	console.log(`Character to find distance to: '${c}'`);

	// First pass: left to right
	console.log("\nStarting left to right pass...");
	for (let i = 0; i < n; i++) {
		if (s[i] === c) {
			position = i;
			console.log(`Found '${c}' at index ${i}.`);
		}
		answer[i] = Math.abs(i - position);
		console.log(`Distance from index ${i} ('${s[i]}') to nearest '${c}' on the left: ${answer[i]}`);
	}

	// Second pass: right to left
	console.log("\nStarting right to left pass...");
	position = Infinity;
	for (let i = n - 1; i >= 0; i--) {
		if (s[i] === c) {
			position = i;
			console.log(`Found '${c}' at index ${i}.`);
		}
		// Update the answer with the minimum distance found so far
		answer[i] = Math.min(answer[i], Math.abs(i - position));
		console.log(`Distance from index ${i} ('${s[i]}') to nearest '${c}': ${answer[i]}`);
	}

	console.log("\nFinal distances:");
	console.log(answer);
	return answer;
};

// Example usage:
console.log("Example 1:");
shortestToChar("loveleetcode", "e");
console.log("\nExample 2:");
shortestToChar("aaab", "b");
