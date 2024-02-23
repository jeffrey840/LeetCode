



function differenceInAges(ages){

//   itrate over array
//   find smallest and biggest number
//   subtrat both number
//   and return an array with [samllest, oldest, difference]


	let max = Math.max(...ages)
	let min = Math.min(...ages)

	let arr = [min,max,max-min]
	return arr



}


console.log(differenceInAges([82, 15, 6, 38, 35]))