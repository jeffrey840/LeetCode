

function rowWeights(array) {
	let team1Sum = 0, team2Sum = 0;

	array.forEach((weight, index) => {
		if (index % 2 === 0) {
			team1Sum += weight;
		} else {
			team2Sum += weight;
		}
	});

	return [team1Sum, team2Sum];
}
