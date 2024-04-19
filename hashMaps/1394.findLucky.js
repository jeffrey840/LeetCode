/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {

	const frequencyMap = new Map();


	for (const num of arr) {
		if (frequencyMap.has(num)) {
			frequencyMap.set(num, frequencyMap.get(num) + 1);
		} else {
			frequencyMap.set(num, 1);
		}
	}

	let maxLucky = -1;

	for(const [num, count] of frequencyMap) {
		if (num === count) {
			maxLucky = Math.max(maxLucky, num);
		}
	}

	return maxLucky;

}
