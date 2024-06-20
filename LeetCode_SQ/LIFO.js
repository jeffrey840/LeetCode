class Stack {
	constructor() {
		this.items = [];
	}

	// Push element onto stack
	push(element) {
		this.items.push(element);
	}

	// Pop element from stack
	pop() {
		if (this.items.length === 0) {
			return "Stack is empty";
		}
		return this.items.pop();
	}

	// View the top element of the stack
	peek() {
		return this.items[this.items.length - 1];
	}

	// Check if the stack is empty
	isEmpty() {
		return this.items.length === 0;
	}
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.peek()); // Output: 10
