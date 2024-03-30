function last(x){

	let words = x.split(" ");
	console.log(words)

	// Sort the array based on the last character of each word
	words.sort((a, b) => {
		let lastCharA = a[a.length - 1];
		let lastCharB = b[b.length - 1];
		return lastCharA.localeCompare(lastCharB);
	});

	// Return the sorted array
	return words;

}