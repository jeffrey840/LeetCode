
var isPrefixOfWord = function(sentence, searchWord) {
	let splitted = sentence.split(" ")
	for(let i = 0; i < splitted.length; i++) {
		if(splitted[i].startsWith(searchWord)) {
			return i +1
		}
	}
	return -1
};