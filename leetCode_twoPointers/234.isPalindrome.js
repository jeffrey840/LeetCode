function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

var isPalindrome = function(head) {
	if (head == null || head.next == null) return true;

	let firstHalfEnd = endOfFirstHalf(head);
	let secondHalfStart = reverseList(firstHalfEnd.next);

	let p1 = head;
	let p2 = secondHalfStart;
	let result = true;
	while (result && p2 != null) {
		if (p1.val !== p2.val) result = false;
		p1 = p1.next;
		p2 = p2.next;
	}

	firstHalfEnd.next = reverseList(secondHalfStart);
	return result;
};

function reverseList(head) {
	let prev = null;
	while (head != null) {
		let nextNode = head.next;
		head.next = prev;
		prev = head;
		head = nextNode;
	}
	return prev;
}

function endOfFirstHalf(head) {
	let slow = head;
	let fast = head;
	while (fast.next != null && fast.next.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
	let dummyHead = new ListNode(0);
	let current = dummyHead;
	for (let value of values) {
		current.next = new ListNode(value);
		current = current.next;
	}
	return dummyHead.next; // Return the real head, skipping the dummy
}

// Example usage:
let list1 = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(list1)); // true

let list2 = createLinkedList([1, 2]);
console.log(isPalindrome(list2)); // false
