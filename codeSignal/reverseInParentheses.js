function solution(inputString) {

	let stack = [];
	for (let char of inputString) {
		if (char === ')') {
			let reversed = '';
			// Pop characters from the stack until '(' is encountered
			while (stack.length && stack[stack.length - 1] !== '(') {
				reversed += stack.pop();
			}
			stack.pop(); // Pop the '('
			// Push the reversed string back into the stack
			for (let c of reversed) {
				stack.push(c);
			}
		} else {
			// Push everything else onto the stack
			stack.push(char);
		}
	}
	// The stack now contains the fully processed string without reversed parentheses
	return stack.join('');

}




