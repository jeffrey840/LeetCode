



function flattenAndSort(array) {
	// Good luck, brave code warrior!
	let joined = array.flat(Infinity)
	return joined.sort((a,b) => a-b)
	// console.log(array.flat(Infinity));
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))