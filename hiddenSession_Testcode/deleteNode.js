class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let deleteFirstNode = (head) => {
	if (!head) return null;
	return head.next;
}

let deleteNode = (prevNode) => {
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

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

console.log("List before any deletion:");
printList(head); // Outputs: 1, 2, 3, 4

deleteNode(second);
console.log("List after deleting the third node:");
printList(head); // Outputs: 1, 2, 4

head = deleteFirstNode(head);
console.log("List after deleting the first node:");
printList(head); // Outputs: 2, 4


