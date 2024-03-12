


function miniMaxSum(arr) {
	// Write your code here
	// sort the array snallest to highest
	// save eth first 4 elements and add them
	// save teh last 4 elements and add them
	// return
	// First, sort the array
	arr.sort((a, b) => a - b);

	// Calculate the sum of the first four elements for the minimum sum
	let min = 0;
	for (let i = 0; i < 4; i++) {
		min += arr[i];
	}

	// Calculate the sum of the last four elements for the maximum sum
	let max = 0;
	for (let i = arr.length - 4; i < arr.length; i++) {
		max += arr[i];
	}

	// Print the minimum and maximum sums
	console.log(min + " " + max);

}
