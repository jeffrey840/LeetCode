
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var getIntersectionNode = function(headA, headB) {
	// Create a set to store the nodes from the first list
	const nodesInA = new Set();

	// Traverse the first list and add nodes to the set
	let currentNode = headA;
	while (currentNode !== null) {
		nodesInA.add(currentNode);  // Add the node reference to the set
		currentNode = currentNode.next; // Move to the next node in the list
	}

	// Traverse the second list, checking for intersection
	currentNode = headB;
	while (currentNode !== null) {
		if (nodesInA.has(currentNode)) { // Check if the set contains the current node
			return currentNode;          // If found, this is the intersection
		}
		currentNode = currentNode.next;  // Move to the next node
	}

	// If no intersection, return null
	return null;
};

console.log(getIntersectionNode([1,2,3,8,9], [5,6,8,9]))