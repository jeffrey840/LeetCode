function solution(trainingData) {

	// Filter the training data to get only entries with correctness 1
	let correctEntries = trainingData.filter(entry => entry[1] === 1);

	// Calculate the sum of the answer times of these correct entries
	let totalCorrectTime = correctEntries.reduce((acc, entry) => acc + entry[0], 0);

	// Calculate the average time; if there are no correct entries, return 0.0
	if (correctEntries.length === 0) {
		return 0.0;
	} else {
		return totalCorrectTime / correctEntries.length;
	}


}
