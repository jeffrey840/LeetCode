function solution(matrix) {

	let totalSum = 0;
	for (let j = 0; j < matrix[0].length; j++) { // Iterate over columns
		for (let i = 0; i < matrix.length; i++) { // Iterate over rows
			if (matrix[i][j] === 0) {
				break; // Exit the loop for this column
			}
			totalSum += matrix[i][j];
		}
	}
	return totalSum;
}
