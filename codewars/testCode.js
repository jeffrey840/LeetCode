


function adjacentElementsProduct(array) {
	let arraysort = array.sort((a,b) => b-a)
	return arraysort[0] * arraysort[1]
}

console.log(adjacentElementsProduct(([4, 12, 3, 1, 5])))