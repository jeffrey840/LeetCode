

function plusMinus(arr) {
	// save how many elements are pos, neg and 0
	// divede result by the arr.length
	let posCount = 0;
	let negCount = 0;
	let zeroCount = 0;


	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			posCount++;
		} else if (arr[i] < 0) {
			negCount++;
		} else {
			zeroCount++;
		}
	}

	// Calculating and printing the ratios
	console.log((posCount / arr.length).toFixed(6));
	console.log((negCount / arr.length).toFixed(6));
	console.log((zeroCount / arr.length).toFixed(6));


}