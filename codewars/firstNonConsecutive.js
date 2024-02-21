



function firstNonConsecutive (arr) {

//   compare the arr.length with arr[arr.length -1]
//	if they are not the same then continue

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] > 1) {
			return arr[i];
		}
	}
	return null;

}



console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

