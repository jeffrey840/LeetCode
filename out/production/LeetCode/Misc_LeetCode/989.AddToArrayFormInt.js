

function addToArrayForm(num, k) {
	let i = num.length - 1; // Start from the last digit of num
	let carry = 0; // To handle carry over
	let result = []; // To store the result

	while (i >= 0 || k > 0) {
		if (i >= 0) {
			k += num[i]; // Add the current digit of num to k
		}
		result.push(k % 10); // The new digit is k mod 10
		k = Math.floor(k / 10); // Update k to the remaining number
		i--; // Move to the next digit
	}

	// If there's a carry left, push it to the result
	if (carry > 0) {
		result.push(carry);
	}

	// The result is currently in reverse order
	return result.reverse();
}



console.log(addToArrayForm([1,2,0,0], 34)); // Expected output: [1,2,3,4]
console.log(addToArrayForm([2,7,4], 181)); // Expected output: [4,5,5]
console.log(addToArrayForm([2,1,5], 806)); // Expected output: [1,0,2,1]
