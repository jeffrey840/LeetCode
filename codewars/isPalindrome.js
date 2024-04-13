/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

	const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
	let cleanedString = "";

	for (let char of s) {
		if (allowedChars.includes(char.toLowerCase())) {
			cleanedString += char.toLowerCase();
		}
	}

	let left = 0;
	let right = cleanedString.length - 1;

	while (left < right) {
		if (cleanedString[left] !== cleanedString[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;



};