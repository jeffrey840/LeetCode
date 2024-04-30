// class ListNode {
// 	constructor(value) {
// 		this.val = value;
// 		this.next = null;
// 	}
// }
//
// let head = new ListNode(1);  // Create the head node with value 1
// head.next = new ListNode(2);  // Add second node with value 2
// head.next.next = new ListNode(3);  // Add third node with value 3
//
// let getSum = head => {
// 	if (!head) {
// 		return 0;
// 	}
// 	return head.val + getSum(head.next);
// }
//
//
// console.log(getSum(head));  // Outputs: 6


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

