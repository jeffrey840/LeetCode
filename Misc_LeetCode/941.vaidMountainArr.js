/**
 * @param {number[]} arr
 * @return {boolean}
 */


function validMountainArray(arr) {

	const n = arr.length;
	let i = 0;

	// Log: Array length check
	console.log("Checking if array length is >= 3:", n >= 3);
	if (n < 3) return false;

	// Walk up to the peak
	while (i + 1 < n && arr[i] < arr[i + 1]) i++;

	// Log: Peak finding
	console.log("Index of peak:", i, ", Peak value:", arr[i]);

	// Peak can't be the first or the last element
	if (i === 0 || i === n - 1) return false;

	// Walk down from the peak
	while (i + 1 < n && arr[i] > arr[i + 1]) i++;

	// Log: End of array check
	console.log("Reached the end of array at index:", i);

	// Check if we have walked through the entire array
	return i === n - 1;

}