

/**
 * @param {string[]} strs
 * @return {number}
 */
function maximumValue(strs) {

	let maxValue = 0;

	// Helper function to check if a string is all digits
	function isAllDigits(s) {
		for (let i = 0; i < s.length; i++) {
			if (s[i] < '0' || s[i] > '9') return false;
		}
		return true;
	}

	strs.forEach(str => {
		if (isAllDigits(str)) {
			// Convert to number and update maxValue if necessary
			const value = parseInt(str, 10);
			maxValue = Math.max(maxValue, value);
		} else {
			// Update maxValue with the length of the string if necessary
			maxValue = Math.max(maxValue, str.length);
		}
	});

	return maxValue;

}


