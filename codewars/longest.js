function longest(s1, s2) {
	// Concatenate the strings and convert to an array of characters
	const combined = s1 + s2;

	// Use a Set to automatically discard duplicate characters
	const uniqueChars = new Set(combined.split(''));

	// Convert the Set back to an array, sort it, and then join it into a string
	const sortedUniqueChars = Array.from(uniqueChars).sort().join('');

	return sortedUniqueChars;




}