

function countingSort(arr) {

	// Initialize a frequency array with 100 elements set to 0
	const frequency = new Array(100).fill(0);

	// Count the frequency of each number in the given array
	for (let i = 0; i < arr.length; i++) {
		frequency[arr[i]]++;
	}

	// Return the frequency array
	return frequency;

}

