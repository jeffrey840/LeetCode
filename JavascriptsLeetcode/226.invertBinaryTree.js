// Given the root of a binary tree, invert the tree, and return its root.
//
//
//
// 	Example 1:
//
//
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:
//
//
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:
//
// Input: root = []
// Output: []
//
//
// Constraints:
//
// 	The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

//1.if root is null return null
//2.create temp variable and assign it to root.left
//3.change root.left to equal root.right
//4.change roo.right to equal temp
//5.invertTree(root.left)
//6.invertTree(root.right)

const invertTree = function(root) {

	if (root === null) return null;
	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);

	return root

};
