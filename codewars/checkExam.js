function checkExam(array1, array2) {

	let score = 0; // Start score at 0

	// Iterate over each answer
	for (let i = 0; i < array1.length; i++) {
		if (array2[i] === "") {
			// Do nothing for blank answers
		} else if (array1[i] === array2[i]) {
			score += 4; // Add 4 for correct answers
		} else {
			score -= 1; // Subtract 1 for wrong answers
		}
	}

	// Return score, but not less than 0
	return score < 0 ? 0 : score;

}