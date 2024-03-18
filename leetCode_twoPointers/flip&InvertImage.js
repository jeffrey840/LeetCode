

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {


	return image.map(function(row) {
		// Flip the row by reversing it
		var reversedRow = row.reverse();
		// Invert the image by iterating over each element and switching 1s to 0s and vice versa
		var invertedRow = reversedRow.map(function(el) {
			if (el === 0) {
				return 1;
			} else {
				return 0;
			}
		});
		return invertedRow;
	});



};

