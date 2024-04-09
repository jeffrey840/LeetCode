
function getEvenNumbers(numbersArray){
	return numbersArray.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1,2,3,6,8,10]))

