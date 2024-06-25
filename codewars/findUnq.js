function findUniq(arr) {


	if (arr[0] !== arr[1]) {
		if (arr[0] !== arr[2]) {
			return arr[0];
		} else {
			return arr[1];
		}
	}
	for (let i = 2; i < arr.length; i++) {
		if (arr[i] !== arr[0]) {
			return arr[i];
		}
	}

}