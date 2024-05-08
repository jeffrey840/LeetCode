class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let addNodeToBeginning = (head, nodeToAdd) => {
	nodeToAdd.next = head;
	head = nodeToAdd;
	return head;
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

console.log("List before adding new node to beginning:");
printList(head);  // Outputs: 1, 2, 3

let newNode = new ListNode(0);
head = addNodeToBeginning(head, newNode);

console.log("List after adding new node to beginning:");
printList(head);  // Outputs: 0, 1, 2, 3


