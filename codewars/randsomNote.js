

function canConstructSimple(ransomNote, magazine) {
	for (let char of ransomNote) {
		if (!magazine.includes(char)) {
			return false;
		} else {
			magazine = magazine.replace(char, '');
		}
	}
	return true;
}

