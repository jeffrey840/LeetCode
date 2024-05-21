

function squareDigits(num) {

	let result = '';
	let digits = num.toString();

	for(let digit of digits) {
		let squared = parseInt(digit) ** 2;
		result += squared.toString();
	}
	return parseInt(result)


}


console.log(squareDigits(765));
