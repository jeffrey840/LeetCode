function solution(picture) {

	// First, determine the length of the new rows with borders
	const rowLength = picture[0].length + 2;
	// Create the top and bottom border strings
	const border = '*'.repeat(rowLength);

	// Use map to add '*' to the beginning and end of each string in the array
	const framedPicture = picture.map(row => `*${row}*`);

	// Add the border to the top and bottom of the framed picture
	return [border, ...framedPicture, border];
}
