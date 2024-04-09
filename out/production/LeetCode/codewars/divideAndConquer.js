

function divCon(x){

	let sumStrings = 0
	let sumNumbers = 0

	for (let i = 0; i < x.length; i++) {
		if (typeof x[i] === "number") {
			sumNumbers += x[i]; // Add if it's a number
		} else if (typeof x[i] === "string") {
			sumStrings += parseInt(x[i]); // Convert to number and add if it's a string
		}
	}

	return sumNumbers - sumStrings;
}


console.log(divCon([9, 3, '7', '3']))

