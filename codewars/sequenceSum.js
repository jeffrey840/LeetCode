const sequenceSum = (begin, end, step) => {
	// If begin is greater than end, return 0
	if (begin > end) return 0;

	let sum = 0;

	// Loop from begin to end with the given step
	for (let i = begin; i <= end; i += step) {
		sum += i;
	}

	return sum;
};