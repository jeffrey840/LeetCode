function isIsogram(str){
	const counts = {};

	let arr = str.toLowerCase().split('');

	for(const char of arr) {
		if(counts[char]) {
			return false
		}
		counts[char] = 1;
	}
	return true

}

console.log(isIsogram("abcc"))
console.log(isIsogram("abc"))