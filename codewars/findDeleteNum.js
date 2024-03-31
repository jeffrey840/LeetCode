function findDeletedNumber(arr, mixArr) {
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const mixArrSum = mixArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum - mixArrSum
}