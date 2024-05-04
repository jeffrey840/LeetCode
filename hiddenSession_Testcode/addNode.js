
class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let addNode = (prevNode, nodeToAdd) => {
	nodeToAdd.next = prevNode.next;
	prevNode.next = nodeToAdd;
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);

head.next = second;
second.next = third;

let newNode = new ListNode(4);
addNode(second, newNode);

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

printList(head);  // Outputs: 1, 2, 4, 3












