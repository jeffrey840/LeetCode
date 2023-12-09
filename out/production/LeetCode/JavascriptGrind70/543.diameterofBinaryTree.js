// Given the root of a binary tree, return the length of the diameter of the tree.
//
// 	The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
// 	The length of a path between two nodes is represented by the number of edges between them.
//
//
//
// 	Example 1:
//
//
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// 	Example 2:
//
// Input: root = [1,2]
// Output: 1


//We define a TreeNode class to represent the nodes of the binary tree. Each node has a val property to store its value, a left property to store its left child, and a right property to store its right child.
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// We define a function diameterOfBinaryTree that takes the root node of the binary tree as input and returns the diameter of the binary tree.

function diameterOfBinaryTree(root) {

	// We initialize the diameter variable to 0. This variable will store the maximum diameter seen so far.
	let diameter = 0;

	// We define a helper function height that takes a node as input and returns its height. The height of a node is the maximum of the heights of its left and right children, plus 1. In addition, we update the diameter variable to store the maximum diameter seen so far, which is the sum of the heights of the left and right children.
	function height(node) {
		if (node === null) {
			return 0;
		}
		const leftHeight = height(node.left);
		const rightHeight = height(node.right);
		diameter = Math.max(diameter, leftHeight + rightHeight);
		return 1 + Math.max(leftHeight, rightHeight);
	}

	// We call the height function with the root node of the binary tree to compute the height of the binary tree and update the diameter variable.
	height(root);

	// We return the diameter variable as the output of the diameterOfBinaryTree function.
	return diameter;
}



