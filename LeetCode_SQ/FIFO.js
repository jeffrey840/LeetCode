class Queue {
	constructor() {
		this.items = [];
	}

	// Enqueue element to the back of the queue
	enqueue(element) {
		this.items.push(element);
	}

	// Dequeue element from the front of the queue
	dequeue() {
		if (this.items.length === 0) {
			return "Queue is empty";
		}
		return this.items.shift(); // Removes the first element
	}

	// View the first element of the queue
	front() {
		if (this.items.length === 0) {
			return "Queue is empty";
		}
		return this.items[0];
	}

	// Check if the queue is empty
	isEmpty() {
		return this.items.length === 0;
	}
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.front());   // Output: 30
