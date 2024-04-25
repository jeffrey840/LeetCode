class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

function middleNode(head) {
	let slow = head;
	let fast = head;

	// Move fast pointer at 2x speed and slow pointer at 1x speed
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Now slow is at the middle node
	return slow;
}

// Helper function to create a linked list from an array
function createLinkedList(elements) {
	let dummy = new ListNode(0);
	let current = dummy;
	elements.forEach(element => {
		current.next = new ListNode(element);
		current = current.next;
	});
	return dummy.next;
}

// Helper function to convert linked list to array starting from the middle node
function linkedListToArray(node) {
	const result = [];
	while (node) {
		result.push(node.val);
		node = node.next;
	}
	return result;
}