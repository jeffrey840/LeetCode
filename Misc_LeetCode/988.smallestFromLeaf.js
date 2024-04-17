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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
	let smallestStr = "{"; // Use a character that is lexicographically larger than 'z'

	function dfs(node, path) {
		if (!node) return;

		// Convert current node's value to corresponding character and prepend it to path
		const currentChar = String.fromCharCode(97 + node.val);
		const currentPath = currentChar + path;

		// If it's a leaf node
		if (!node.left && !node.right) {
			if (currentPath < smallestStr) {
				smallestStr = currentPath;
			}
		}

		// Recurse on left and right children
		dfs(node.left, currentPath);
		dfs(node.right, currentPath);
	}

	dfs(root, "");
	return smallestStr;
};