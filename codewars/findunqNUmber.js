function findUniq(arr) {


	if (arr[0] !== arr[1]) {
		if (arr[0] !== arr[2]) {
			return arr[0];
		} else {
			return arr[1];
		}
	}

	// Iterate through the array starting from the third element
	for (let i = 2; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return arr[i];
		}
	}

}




console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) )
console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 1, 0 ]))