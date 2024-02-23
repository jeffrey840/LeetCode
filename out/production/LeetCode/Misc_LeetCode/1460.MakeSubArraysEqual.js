
function canBeEqual(target, arr) {
	// Sort both arrays
	target.sort((a, b) => a - b);
	arr.sort((a, b) => a - b);

	// Compare sorted arrays
	for (let i = 0; i < target.length; i++) {
		if (target[i] !== arr[i]) {
			console.log('Arrays cannot be made equal.');
			return false;
		}
	}

	console.log('Arrays can be made equal.');
	return true;
}

// Example 1
console.log(canBeEqual([1,2,3,4], [2,4,1,3])); // true

// Example 2
console.log(canBeEqual([7], [7])); // true

// Example 3
console.log(canBeEqual([3,7,9], [3,7,11])); // false


