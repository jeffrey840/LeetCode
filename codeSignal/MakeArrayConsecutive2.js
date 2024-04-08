function solution(statues) {
	// Sort the array to ensure we're always comparing adjacent sizes in ascending order.
	let sorted = statues.sort((a, b) => a - b);
	let count = 0; // This will keep track of the number of additional statues needed.

	// Iterate through the sorted array to find gaps between the statues.
	for (let i = 0; i < sorted.length - 1; i++) {
		// Calculate the difference between the current statue and the next one.
		let diff = sorted[i + 1] - sorted[i];

		// If the difference is more than 1, we're missing statues.
		// We subtract 1 because we're looking for the number of additional statues needed,
		// not the total difference in size.
		if (diff > 1) {
			count += diff - 1;
		}
	}

	// Return the total number of additional statues needed.
	return count;
}
