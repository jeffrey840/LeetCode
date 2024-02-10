
var transformArray = function(arr) {
	let changed = true;

	while (changed) {
		changed = false;
		const newArr = [...arr];

		for(let i = 1;i <= arr.length - 1;i++) {
			if(arr[i] < arr[i-1] && arr[i] < arr[i + 1]) {
				newArr[i]++;
				changed = true;
			} else if (arr[i] > arr[i-1] && arr[i] > arr[i + 1]) {
				newArr[i]--;
				changed = true;
			}
		}
		arr = newArr;
	}
	return arr;
};