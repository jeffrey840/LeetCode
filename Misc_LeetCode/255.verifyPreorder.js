/**
 * @param {number[]} preorder
 * @return {boolean}
 */

function verifyPreorder(preorder) {
	let stack = [];
	let root = -Infinity;

	for (let value of preorder) {
		// If we find a value which is on the right side and smaller than the root, return false.
		if (value < root) return false;

		// If the value is greater than the last item in the stack, it means we're backtracking up
		// the tree, so we need to update the root to the last valid parent node.
		while (stack.length > 0 && stack[stack.length - 1] < value) {
			root = stack.pop();
		}

		// Push the current value onto the stack as it's now the current node being processed.
		stack.push(value);
	}

	// If we've made it through the entire preorder array without finding an inconsistency,
	// then the sequence can represent a preorder traversal of a BST.
	return true;
}
