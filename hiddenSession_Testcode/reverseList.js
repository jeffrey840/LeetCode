class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

let reverseList = head => {
	let prev = null;
	let curr = head;
	while (curr) {
		let nextNode = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextNode;
	}
	return prev;
}




let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);

head.next = second;
second.next = third;

console.log("Original list:");
printList(head);

let reversedHead = reverseList(head);
console.log("Reversed list:");
printList(reversedHead);
