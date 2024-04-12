function arrayLeaders(arr){
	let leaders = [];
	let rightSum = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] > rightSum) {
			leaders.push(arr[i]);
		}
		rightSum += arr[i];
	}
	return leaders.reverse();
}