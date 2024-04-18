/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {

	let x = 0; // Horizontal position
	let y = 0; // Vertical position
	const visited = {}; // Object to keep track of visited coordinates

	// Convert initial position to a string and mark it as visited in the hashmap
	visited[`${x},${y}`] = true;

	// Iterate through each character in the path
	for (const move of path) {
		switch (move) {
			case 'N':
				y++; // Move north increases y
				break;
			case 'S':
				y--; // Move south decreases y
				break;
			case 'E':
				x++; // Move east increases x
				break;
			case 'W':
				x--; // Move west decreases x
				break;
		}

		// Convert current position to a string to use as a key
		const position = `${x},${y}`;

		// Check if the current position has already been visited
		if (visited[position]) {
			return true; // Path crosses itself
		}

		// Mark the current position as visited
		visited[position] = true;
	}

	return false; // No crossing found after completing the loop


};