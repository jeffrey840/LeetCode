// Given two binary strings a and b, return their sum as a binary string.
//
//
//
// 	Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//
//
// Constraints:
//
// 	1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// 	Each string does not contain leading zeros except for the zero itself.


var addBinary = function (a, b) {
	// Resultant string
	let result = "";
	// Indices for a and b
	let i = a.length - 1;
	let j = b.length - 1;
	// Carry
	let carry = 0;
	while (i >= 0 || j >= 0) {
		// Sum of two bits
		let sum = carry;
		if (i >= 0) {
			sum += a[i--] - '0';
		}
		if (j >= 0) {
			sum += b[j--] - '0';
		}
		// Add the bit to the result
		result = sum % 2 + result;
		// Modify carry
		carry = parseInt(sum / 2);
	}
	// Final check if carry exists
	if (carry > 0) {
		result = 1 + result;
	}
	return result;
};

//example:
//Input: a = "1010", b = "1011"
// Output: "10101"

// console.log(addBinary(1010, 1011));