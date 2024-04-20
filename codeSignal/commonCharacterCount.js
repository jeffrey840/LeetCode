const { values } = require("lodash");

function solution(s1, s2) {

	const freqCounterS1 = new Map();


	// Iterate through the array and update the frequency of each number
	for (const num of s1) {
		freqCounterS1.set(num, (freqCounterS1.get(num) || 0) + 1);
	}

	const freqCounterS2 = new Map();

	// Iterate through the array and update the frequency of each number
	for (const num of s2) {
		freqCounterS2.set(num, (freqCounterS2.get(num) || 0) + 1);
	}

	let count = 0;

	// Calculate the minimum occurrences of each character in both strings
	for (const [char, countS1] of freqCounterS1) {
		if (freqCounterS2.has(char)) {
			count += Math.min(countS1, freqCounterS2.get(char));
		}
	}

	return count;

}
