// Given a binary tree, determine if it is
// height-balanced
// 	.
//
//
//
// 	Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
//
//
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
//
// Input: root = []
// Output: true
//
//
// Constraints:
//
// 	The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

// return boolean
// create a base case
// compare the depth difference inside a max depth function


var isBalanced = function(root) {

	let res = true;

	let maxDepth = (node) => {
		if (!node) return 0;
		let l = maxDepth(node.left), r = maxDepth(node.right);
		if ( Math.abs(l-r) > 1) res = false;

		return 1 + Math.max(l,r);
	}
	maxDepth(root);
	return res;
};