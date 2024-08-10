/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i]++;
			return digits;
		}
		digits[i] = 0;
	}





	// If all digits were 9, we end up here, so we need to add a 1 at the beginning
	digits.unshift(1);
	return digits;
};