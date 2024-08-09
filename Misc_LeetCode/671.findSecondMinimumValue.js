/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
	// The smallest value is the value of the root node
	const minVal = root.val;
	let secondMin = Infinity;
	let found = false;

	function dfs(node) {
		if (!node) return;

		// If we find a value greater than minVal, consider it for second minimum
		if (minVal < node.val && node.val < secondMin) {
			secondMin = node.val;
			found = true;
		}

		// Recurse on left and right children
		dfs(node.left);
		dfs(node.right);
	}

	// Start DFS traversal
	dfs(root);

	// If we have found the second minimum, return it, otherwise return -1
	return found ? secondMin : -1;
};
