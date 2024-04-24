
function solution(arr) {


	const frequencyMap = new Map();


	for (const num of arr) {
		if (frequencyMap.has(num)) {
			frequencyMap.set(num, frequencyMap.get(num) + 1);
		} else {
			frequencyMap.set(num, 1);
		}
	}

	let oddCount = 0;

	frequencyMap.forEach(count => {
		if(count % 2 !== 0) {
			oddCount++
		}
	})

	return oddCount <= 1;
}

