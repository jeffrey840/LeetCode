class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let deleteNode = prevNode => {
	if (prevNode.next) {
		prevNode.next = prevNode.next.next;
	}
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);

head.next = second;
second.next = third;
third.next = fourth;

// Deleting the third node
deleteNode(second);

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

printList(head);  // Outputs: 1, 2, 4
