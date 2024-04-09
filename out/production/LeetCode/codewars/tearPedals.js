

function howMuchILoveYou(nbPetals) {
	const phrases = [
		"I love you",
		"a little",
		"a lot",
		"passionately",
		"madly",
		"not at all",
	];
	// Use modulo to find the index for the phrase
	// Subtract 1 because array indices start at 0 and petal counts start at 1
	return phrases[(nbPetals - 1) % phrases.length];
}



