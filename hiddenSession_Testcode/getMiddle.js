class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let getMiddle = head => {
	let slow = head;  // Slow pointer starts at the head
	let fast = head;  // Fast pointer also starts at the head

	while (fast && fast.next) {
		slow = slow.next;  // Slow moves one step
		fast = fast.next.next;  // Fast moves two steps
	}

	return slow.val;  // When fast reaches the end, slow is at the middle
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
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log("List before finding the middle:");
printList(head);  // Outputs the list

let middleValue = getMiddle(head);
console.log(`Middle of the list value: ${middleValue}`);  // Outputs the value of the middle node
