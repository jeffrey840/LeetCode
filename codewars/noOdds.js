function noOdds( values ){
	// Return all non-odd values

	let arr = [];

	for(let i = 0;i < values.length;i++) {
		if(values[i] % 2 === 0) {
			arr.push(values[i])
		}
	}
	return arr




}


console.log(noOdds([0,1,2,3]))
console.log(noOdds([0,1]))
