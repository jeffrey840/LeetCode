

function twoSort(s) {
	// Sort the array alphabetically
	s.sort();

	// Get the first element of the sorted array
	let sorted1st = s[0];

	// Split the first element into characters and join with "***"
	let result = sorted1st.split('').join('***');

	return result;
}

console.log(twoSort(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])))


