/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
	let counter = 0
	let hashMap = new Set(arr)
	for(let i = 0;i<=arr.length;i++) {

		let value = arr[i] + 1;

		if(hashMap.has(value)) {
			counter +=1
		}

	}
	return counter


};