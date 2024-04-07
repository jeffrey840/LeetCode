/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

	const processString = (str) => {
		const stack = [];
		for (let char of str) {
			if (char !== '#') {
				stack.push(char);
			} else if (stack.length) {
				stack.pop(); // Simulate backspace
			}
		}
		return stack.join(''); // Convert the stack back to a string
	};

	// Process both strings and compare the results
	return processString(s) === processString(t);

};