class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let getSum = head => {
	let ans = 0;
	let dummy = head;  // Dummy variable for traversal
	while (dummy) {
		ans += dummy.val;
		dummy = dummy.next;
	}
	return ans;
}

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

head.next = second;
second.next = third;

console.log("Before calculating sum:");
printList(head);  // Outputs: 1, 2, 3

let totalSum = getSum(head);
console.log(`Total sum of list: ${totalSum}`);  // Outputs: Total sum of list: 6

console.log("After calculating sum:");
printList(head);  // Outputs: 1, 2, 3



