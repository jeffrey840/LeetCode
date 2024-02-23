
function sumTwoSmallestNumbers(numbers) {


	numbers.sort((a, b) => a - b);
	let first = numbers[0]
	let sec = numbers[1]
	return sec+first

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]),)