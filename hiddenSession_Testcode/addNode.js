class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let addNode = (prevNode, nodeToAdd) => {
	// Attach the new node to the next node in the list
	nodeToAdd.next = prevNode.next;
	// Then link the previous node to the new node
	prevNode.next = nodeToAdd;
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);

head.next = second;
second.next = third;

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

console.log("List before adding new node:");
printList(head);  // Outputs: 1, 2, 3

let newNode = new ListNode(4);
addNode(second, newNode);

console.log("List after adding new node:");
printList(head);  // Outputs: 1, 2, 4, 3
