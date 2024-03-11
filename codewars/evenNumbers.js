

function evenNumbers(array, number) {
	const evenNumbers = array.filter(num => num % 2 === 0);
	return evenNumbers.slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


