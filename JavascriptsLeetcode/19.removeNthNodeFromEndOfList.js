function removeNthFromEnd(head, n) {
	// 1. Create a dummy node
	let dummy = new ListNode(0, head);
	/* Visual:
		dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
	*/

	// 2. Initialize two pointers
	let fast = dummy;
	let slow = dummy;

	// 3. Move 'fast' n steps ahead
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}
	/* Example: If n = 2
		dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
				  ^       ^
				  slow    fast
	*/

	// 4. Move both pointers until 'fast' reaches the end
	while (fast.next !== null) {
		fast = fast.next;
		slow = slow.next;
	}
	/*
		dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
								 ^    ^
								 slow fast
	*/

	// 5. Remove the nth node from the end
	slow.next = slow.next.next;
	/*
		dummy -> 1 -> 2 -> 3 -> 5 -> null
				  ^           ^
				  slow        slow.next.next
	*/

	// 6. Return the modified list's head
	return dummy.next;
}
