function areIsomorphic(s, t) {
	if (s.length !== t.length) {
		console.log(`Strings are of different lengths: ${s.length} vs ${t.length}, cannot be isomorphic.`);
		return false; // If strings are of different lengths, they can't be isomorphic
	}

	let mapST = {};  // Maps characters from s to t
	let mapTS = {};  // Maps characters from t to s

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		console.log(`Checking characters: s[${i}] = ${charS}, t[${i}] = ${charT}`);

		// Check if the current character of s is already mapped to a different character in t
		if (mapST[charS] !== undefined) {
			if (mapST[charS] !== charT) {
				console.log(`Conflict: ${charS} is already mapped to ${mapST[charS]}, not to ${charT}`);
				return false; // If it's mapped to a different character, return false
			}
		} else {
			mapST[charS] = charT; // Map charS to charT
			console.log(`Mapping ${charS} to ${charT} in mapST`);
		}

		// Check if the current character of t is already mapped to a different character in s
		if (mapTS[charT] !== undefined) {
			if (mapTS[charT] !== charS) {
				console.log(`Conflict: ${charT} is already mapped to ${mapTS[charT]}, not to ${charS}`);
				return false; // If it's mapped to a different character, return false
			}
		} else {
			mapTS[charT] = charS; // Map charT to charS
			console.log(`Mapping ${charT} to ${charS} in mapTS`);
		}
	}

	console.log(`All character mappings are consistent. Strings ${s} and ${t} are isomorphic.`);
	return true; // If all checks pass, strings are isomorphic
}

// Example usage:
console.log(areIsomorphic("egg", "add"));   // Output: true
console.log(areIsomorphic("foo", "bar"));   // Output: false
console.log(areIsomorphic("paper", "title")); // Output: true
