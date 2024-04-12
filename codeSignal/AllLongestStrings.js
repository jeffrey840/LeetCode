function solution(inputArray) {

	let maxLength = 0;
	let longestStrings = [];

	// First pass to find the maximum length of strings in the array
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length > maxLength) {
			maxLength = inputArray[i].length;
		}
	}

	// Second pass to collect all strings of maximum length
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length === maxLength) {
			longestStrings.push(inputArray[i]);
		}
	}

	return longestStrings;
}
