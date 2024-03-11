

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {


	if (strs.length === 0) return "";

	// Start with the first string as the "prefix" to compare against others
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			// Shorten the prefix by one character at the end
			prefix = prefix.substring(0, prefix.length - 1);

			// If it's shortened to nothing, no common prefix exists
			if (prefix === "") return "";
		}
	}

	return prefix;


}

