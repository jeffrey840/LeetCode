



function min(arr, toReturn) {
	if (toReturn === 'value'){
		// return min value
		return Math.min(...arr);
	} else {
		return arr.indexOf(Math.min(...arr));
	}
}

console.log(min([1,2,3,4,5], 'index'))
console.log(min([1,2,3,4,5], 'value'))



