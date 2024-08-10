function animals(heads, legs){
	// Validate input
	if (heads < 0 || legs < 0 || legs % 2 !== 0) {
		return "No solutions";
	}

	// Calculate the number of chickens and cows
	let chickens = (4 * heads - legs) / 2;
	let cows = heads - chickens;

	// Check if the calculated numbers are valid
	if (chickens < 0 || cows < 0 || !Number.isInteger(chickens) || !Number.isInteger(cows)) {
		return "No solutions";
	}

	return [chickens, cows];
}