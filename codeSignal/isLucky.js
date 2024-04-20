function solution(n) {

// Convert the number to a string to manipulate digits
	let s = n.toString();

	// Check if the length of the string is even
	if (s.length % 2 !== 0) {
		return false; // Return false if it's not an even number of digits
	}

	let half = s.length / 2;

	// Calculate the sum of the first half
	let firstHalfSum = 0;
	for (let i = 0; i < half; i++) {
		firstHalfSum += parseInt(s[i], 10);
	}

	// Calculate the sum of the second half
	let secondHalfSum = 0;
	for (let i = half; i < s.length; i++) {
		secondHalfSum += parseInt(s[i], 10);
	}

	// Compare the sums
	return firstHalfSum === secondHalfSum;



}
