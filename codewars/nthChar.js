function nthChar(words){

	let result = ""

	for (let i = 0; i < words.length; i++) {
		if(i < words[i].length) {
			result += words[i][i]
		}
	}
	return result


}
console.log(nthChar((['yoda', 'best', 'has'])))