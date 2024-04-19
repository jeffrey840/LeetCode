/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

	const frequancyMap = new Map();

	for (const num of arr) {
		if(frequancyMap.has(num)) {
			frequancyMap.set(num, frequancyMap.get(num) + 1);
		}else{
			frequancyMap.set(num, 1)
		}
	}


	const seenFrequency = new Set();

	for(const count of frequancyMap.values()) {

		if(seenFrequency.has(count)) {
			return false
		}
		seenFrequency.add(count)
	}
	return true
};