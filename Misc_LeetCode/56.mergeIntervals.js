


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {

// Sort intervals based on the starting value
	intervals.sort((a, b) => a[0] - b[0]);

	// Initialize the result array with the first interval
	const merged = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		// Get the last interval in the merged array
		const lastMerged = merged[merged.length - 1];
		const current = intervals[i];

		// If the current interval overlaps with the last merged interval, merge them
		if (current[0] <= lastMerged[1]) {
			// Update the end value of the last merged interval if current interval extends further
			lastMerged[1] = Math.max(lastMerged[1], current[1]);
		} else {
			// If they don't overlap, simply add the current interval to the merged array
			merged.push(current);
		}
	}

	return merged;
}