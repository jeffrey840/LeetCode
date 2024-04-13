var validMountainArray = function(arr) {
	const n = arr.length;

	if (n < 3) return false;

	let pivot = false;

	for (let i = 1; i < arr.length - 1; i++) {
		const curr = arr[i];
		const prev = arr[i - 1];
		const next = arr[i + 1];

		if (curr > prev && curr > next) {
			pivot = true;
		}
		else if (prev >= curr && next >= curr) {
			return false;
		}
	}

	return pivot;
};