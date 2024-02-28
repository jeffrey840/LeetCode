function smallEnough(arr, limit) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > limit) {
			return false;
		}
	}
	return true;
}
console.log(smallEnough([66, 101],200))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107,115],100))
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))