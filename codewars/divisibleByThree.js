function divisibleByThree(str){

	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		sum += parseInt(str[i], 10);
	}
	return sum % 3 === 0;
}

console.log(divisibleByThree(['123']))