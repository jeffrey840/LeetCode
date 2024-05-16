function findShort(s){

	let words = s.split(" ");
	let minLength = Infinity;

	for(let word of words) {
		if(word.length < minLength) {
			minLength = word.length;
		}
	}
	return minLength


}


