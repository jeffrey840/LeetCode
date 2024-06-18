function makeGood(s) {
	const stack = [];

	for (let char of s) {
		if (stack.length > 0 && Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
			// Check if the current and last character in the stack are a bad pair
			stack.pop(); // They are a bad pair, remove the last element from the stack
		} else {
			stack.push(char); // They are not a bad pair, add current character to the stack
		}
	}

	return stack.join(''); // Join the stack to form the final good string
}


