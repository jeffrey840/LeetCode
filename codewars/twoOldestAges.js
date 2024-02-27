




function twoOldestAges(ages){

	let sortArr = ages.sort((a, b) => a - b)


	return sortArr.slice(sortArr.length-2,sortArr.length)

}

console.log(twoOldestAges([1,5,87,45,8,8]))