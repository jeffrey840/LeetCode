function maxProduct(numbers, size){
	numbers.sort((a,b) => (a-b))
	console.log(numbers)
	let product = 1;
	for (let i = numbers.length - size; i < numbers.length; i++) {
		product *= numbers[i];
	}

	return product;
}

console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14],5))