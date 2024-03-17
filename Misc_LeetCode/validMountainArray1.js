function validMountainArray(arr) {
	// base case
	if (arr.length < 3) return false
	if (arr[0] > arr[1]) return false
	if (arr[arr.length - 1] > arr[arr.length - 2]) return false

	let start = 0
	let high = 0
	// climb up mountain
	while (start < arr.length - 1) {
		if (arr[start] >= arr[start + 1]) {
			high = start
			break
		}
		start++
	}
	console.log(high,start)
	// climb down mountain
	while (high < arr.length - 1) {
		if (arr[high] <= arr[high + 1]) return false
		high++
	}
	return true
}

console.log(validMountainArray([1,2,3]))
console.log(validMountainArray([1,3,2]))
console.log(validMountainArray([1,2,2]))
