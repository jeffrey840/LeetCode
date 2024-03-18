/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	// A number is a power of two if it's greater than 0
	// and its binary representation has exactly one '1'.
	return n > 0 && (n & (n - 1)) === 0;
};
