function solution(inputArray) {

	// Initialize the maximum difference variable
	let maxDifference = 0;

	// Iterate through the array, comparing adjacent elements
	for (let i = 1; i < inputArray.length; i++) {
		// Calculate the absolute difference between adjacent elements
		let currentDifference = Math.abs(inputArray[i] - inputArray[i - 1]);

		// Update the maximum difference if the current one is larger
		if (currentDifference > maxDifference) {
			maxDifference = currentDifference;
		}
	}

	// Return the maximum difference found
	return maxDifference;



}


console.log(solution([2,4,1,0]))