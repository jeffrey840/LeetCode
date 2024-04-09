
var findWordsContaining = function(words, x) {

	let answer = []

	words.forEach((word, index) => {
		if(word.includes(x)) {
			answer.push(index)
		}
	})
	return answer
};