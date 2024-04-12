function evenChars(string) {
	if(2 > string.length || string.length > 100) return 'invalid string';
	return string.split('').filter(function(item, index) {
		return index % 2 !== 0;
	});
}