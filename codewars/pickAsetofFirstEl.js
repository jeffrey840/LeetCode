
function first(arr, n) {

	if(n === undefined) {
		return arr.slice(0,1)
	}
	else {
		return arr.slice(0,n)
	}

}

console.log(first(['a', 'b', 'c', 'd', 'e'],2))
console.log(first(['a', 'b', 'c', 'd', 'e']))

