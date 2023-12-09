// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// 	Example 1:
//
//
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
//
// Input: head = [1], n = 1
// Output: []
// Example 3:
//
// Input: head = [1,2], n = 1
// Output: [1]
//
//
// Constraints:
//
// 	The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

//returns an array
//deletes array.length - n and returns array

var removeNthFromEnd = function (head, n) {
	// Create a new LinkedList with a dummy first entry that copies the original LinkedList
	let newLinkedList = new ListNode(0);
	newLinkedList.next = head;

	// Initialise fast and slow pointers
	let fastPointer = newLinkedList;
	let slowPointer = newLinkedList;

	// Move the fast pointer up by n + 1 (+ 1 is to account for the dummy node)
	for (let i = 1; i <= n + 1; i++) {
		fastPointer = fastPointer.next;
	}

	// Move the fast and slow pointers fowards, until the fast pointer reaches the end
	// This indicates that the slow pointer has reached (end - n - 1) AKA the next node is the target node
	while (fastPointer != null) {
		fastPointer = fastPointer.next;
		slowPointer = slowPointer.next;
	}

	// Move the slow pointer's next value on by 1 (effectively skipping / removing the target node)
	slowPointer.next = slowPointer.next.next;

	// Return the copy of the original list node, minus the initial dummy node and the node that was removed
	return newLinkedList.next;
};
