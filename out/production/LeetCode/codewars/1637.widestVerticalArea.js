/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {

	// Sort the points array based on the x-coordinate
	points.sort((a, b) => a[0] - b[0]);

	// Initialize max width to 0
	let maxWidth = 0;

	// Iterate through the sorted points
	for (let i = 1; i < points.length; i++) {
		// Calculate the difference between the x-coordinates of consecutive points
		const currentWidth = points[i][0] - points[i - 1][0];

		// Update maxWidth if currentWidth is greater than maxWidth
		if (currentWidth > maxWidth) {
			maxWidth = currentWidth;
		}
	}

	// Return the maximum width found
	return maxWidth;

}