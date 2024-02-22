
function mergeArrays(arr1, arr2) {

// Step 1 & 2: Concatenate the two arrays and sort them in ascending order
	let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

	// Step 3: Remove duplicates by converting to a Set, then back to an array
	let uniqueArray = Array.from(new Set(mergedArray));

	return uniqueArray;
}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))