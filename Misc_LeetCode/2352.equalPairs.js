/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
	let convertToKey = arr => {
		let key = "";
		for (const num of arr) {
			key += num + ",";
		}

		return key;
	}

	let dic = new Map();
	for (const arr of grid) {
		let key = convertToKey(arr);
		dic.set(key, (dic.get(key) || 0) + 1);
	}

	let dic2 = new Map();
	for (let col = 0; col < grid[0].length; col++) {
		let currentCol = [];
		for (let row = 0; row < grid.length; row++) {
			currentCol.push(grid[row][col]);
		}

		let key = convertToKey(currentCol);
		dic2.set(key, (dic2.get(key) || 0) + 1);
	}

	let ans = 0;
	for (const [key, val] of dic) {
		ans += val * dic2.get(key) || 0;
	}

	return ans;
};