function maxRot(n) {
	// Convert the number to a string for manipulation
	let numStr = n.toString();
	// Initialize the maximum number with the original number
	let maxNumber = n;

	// Iterate through each digit except the last one
	for (let i = 0; i < numStr.length - 1; i++) {
		// Convert the string to an array for manipulation
		let numArr = numStr.split('');

		// Perform the rotation: move the i-th digit to the end
		let rotatedPart = numArr.splice(i + 1).concat(numArr[i]);
		let newNumStr = numArr.slice(0, i).concat(rotatedPart).join('');

		// Update numStr for the next iteration
		numStr = newNumStr;

		// Convert back to an integer
		let newNumber = parseInt(newNumStr, 10);

		// Update the maximum number if the new number is greater
		if (newNumber > maxNumber) {
			maxNumber = newNumber;
		}
	}




	// Return the maximum number
	return maxNumber;
}