
function oddOrEven(array) {
	if(array.length === 0){
		return "even"
	}
	let sum = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
	);
	if(sum % 2 === 0) {
		return "even"
	} else return "odd"
}

console.log(oddOrEven([]))