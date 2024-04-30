class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

let addNode = (node, nodeToAdd) => {
	let prevNode = node.prev;
	nodeToAdd.next = node;
	nodeToAdd.prev = prevNode;
	if (prevNode) {
		prevNode.next = nodeToAdd;
	}
	node.prev = nodeToAdd;
}

let deleteNode = node => {
	let prevNode = node.prev;
	let nextNode = node.next;
	if (prevNode) {
		prevNode.next = nextNode;
	}
	if (nextNode) {
		nextNode.prev = prevNode;
	}
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

let newNode = new ListNode(4);
addNode(second, newNode);

deleteNode(newNode);

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

printList(head);  // Outputs: 1, 2, 3
