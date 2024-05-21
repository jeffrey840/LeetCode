function XO(str) {

	let xCount = 0;
	let oCount = 0;
	str = str.toLowerCase();

	for(const char of str) {

		if(char === 'x') {
			xCount++;
		} else if(char === 'o') {
			oCount++;
		}

	}

	return xCount === oCount;


}