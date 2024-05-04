function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

var swapPairs = function(head) {
	if (!head || !head.next) {
		return head;
	}

	let dummy = head.next;
	let prev = null;

	while (head && head.next) {
		if (prev) {
			prev.next = head.next;
		}
		prev = head;

		let nextNode = head.next.next;
		head.next.next = head;

		head.next = nextNode;
		head = nextNode;
	}

	return dummy;
};

let printList = (head) => {
	let current = head;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
}

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);

head.next = second;
second.next = third;
third.next = fourth;

console.log("Original List:");
printList(head);

let swappedHead = swapPairs(head);
console.log("List after swapping pairs:");
printList(swappedHead);
