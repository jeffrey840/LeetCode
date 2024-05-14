class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let rotateRight = (head, k) => {
	if (!head || k === 0) return head;

	// First pass to find the length and the end of the list
	let lastElement = head;
	let length = 1;
	while (lastElement.next) {
		lastElement = lastElement.next;
		length++;
	}
	console.log(lastElement)
	console.log(length)

	// Adjust k to avoid unnecessary full rotations
	k = k % length;
	if (k === 0) return head;

	// Second pass to find the new tail: (length - k - 1)th node
	let newTail = head;
	for (let i = 0; i < length - k - 1; i++) {
		newTail = newTail.next;
	}

	let newHead = newTail.next;

	// Rotate the list
	lastElement.next = head;
	newTail.next = null;

	return newHead;
}

let printList = (head) => {
	let current = head;
	let listValues = [];
	while (current !== null) {
		listValues.push(current.val);
		current = current.next;
	}
	console.log(listValues.join(" -> "));
}

// Example Usage
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log("List before rotation:");
printList(head); // Outputs: 1 -> 2 -> 3 -> 4 -> 5

head = rotateRight(head, 2);
console.log("List after rotating by 2:");
printList(head); // Outputs: 4 -> 5 -> 1 -> 2 -> 3
