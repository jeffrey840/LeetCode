
var minSwaps = function(s) {
	let imbalanceCounter = 0;
	let maxImbalance = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === ']') {
			imbalanceCounter += 1;
		} else { // s[i] === '['
			imbalanceCounter -= 1;
		}
		maxImbalance = Math.max(maxImbalance, imbalanceCounter);
	}

	// Since each swap fixes two imbalances, divide by 2.
	// The use of Math.ceil is not necessary as maxImbalance will always be even,
	// but including it for clarity and in case of any adjustments.
	return Math.ceil(maxImbalance / 2);
};