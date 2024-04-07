
var isLongPressedName = function(name, typed) {
	let i = 0; // Pointer for name
	let j = 0; // Pointer for typed

	while (j < typed.length) {
		if (i < name.length && name[i] === typed[j]) {
			// When characters match, move both pointers
			i++;
			j++;
		} else if (j > 0 && typed[j] === typed[j - 1]) {
			// If characters don't match, check if it's a long press
			j++;
		} else {
			// If neither condition is true, return false
			return false;
		}
	}

	// If all characters in name were matched, return true
	return i === name.length;
};