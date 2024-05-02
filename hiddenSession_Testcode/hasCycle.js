class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

var hasCycle = function(head) {
	let seen = new Set();
	while (head) {
		if (seen.has(head)) {
			return true;
		}
		seen.add(head);
		head = head.next;
	}
	return false;
};

let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);

head.next = second;
second.next = third;

// Check for a cycle before creating one
console.log("Checking for a cycle before creating one:");
let cycleExistsBefore = hasCycle(head);
console.log(`Does the linked list have a cycle? ${cycleExistsBefore}`);  // Expected Output: false

// Now add a cycle and check again
third.next = second;  // Creates a cycle
console.log("Checking for a cycle after creating one:");
let cycleExistsAfter = hasCycle(head);
console.log(`Does the linked list have a cycle? ${cycleExistsAfter}`);  // Expected Output: true



