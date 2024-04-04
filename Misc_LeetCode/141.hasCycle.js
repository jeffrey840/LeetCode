function hasCycle(head) {
	if (!head || !head.next) {
		console.log("List is empty or has only one element, so no cycle.");
		return false;
	}

	let tortoise = head;
	let hare = head.next;
	console.log("Starting the race. Tortoise at the head, Hare at head.next");

	while (hare !== tortoise) {
		if (!hare || !hare.next) {
			console.log("Hare reached the end or there's only one element left. No cycle.");
			return false;
		}

		// Logging the current positions of tortoise and hare
		console.log(`Tortoise moves from node with value ${tortoise.val} to node with value ${tortoise.next.val}`);
		tortoise = tortoise.next; // Move tortoise by 1 step

		console.log(`Hare jumps from node with value ${hare.val} to node with value ${hare.next.next.val}`);
		hare = hare.next.next; // Move hare by 2 steps

		// If they are about to meet, log it
		if (hare === tortoise) {
			console.log(`Hare and Tortoise meet at node with value ${tortoise.val}. Cycle detected.`);
		}
	}

	// If hare and tortoise meet, a cycle exists
	console.log("Cycle detected. Both pointers meet.");
	return true;
}
