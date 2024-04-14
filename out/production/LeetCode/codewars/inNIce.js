function isNice(arr){

	// An empty array is not considered nice.
	if (arr.length === 0) return false;

	for (let n of arr) {
		// Check if neither n-1 nor n+1 is in the array.
		if (!arr.includes(n - 1) && !arr.includes(n + 1)) {
			return false;
		}
	}

	return true;
}