function nthSmallest(arr, n){
	const sortedArr = arr.slice().sort((a, b) => a - b);
	return sortedArr[n - 1];
}