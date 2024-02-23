


function sum (numbers) {
	"use strict";

// if(numbers === null ) return 0
//iterate over arrau
//	add al elements in array
	return numbers.reduce((acc, cur) => acc + cur, 0);

};

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));