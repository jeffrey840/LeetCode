function solution(a, b) {

	if (a.length !== b.length) {
		return false;
	}

	let differIndices = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			differIndices.push(i);
			// If more than two indices differ, return false immediately
			if (differIndices.length > 2) {
				return false;
			}
		}
	}

	// If no differences, arrays are similar
	if (differIndices.length === 0) {
		return true;
	}

	// If exactly two indices differ, check for possible swap
	if (differIndices.length === 2) {
		const [i, j] = differIndices;
		return a[i] === b[j] && a[j] === b[i];
	}

	// If only one index differs, arrays cannot be similar
	return false;


}
