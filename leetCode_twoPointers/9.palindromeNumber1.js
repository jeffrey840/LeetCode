/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(num) {
	let digits = Array.from(String(num), Number);
	let reversedArray = digits.reduce((acc, digit) =>
		[digit, ...acc], []);
	let newDigit =  parseInt(reversedArray.join(''));
	if(num!=newDigit) {
		return false
	} else return true
}