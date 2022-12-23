// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
//
// 	According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
//
//
//
// Example 1:
//
//
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
//
//
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// 	Example 3:
//
// Input: root = [2,1], p = 2, q = 1
// Output: 2
//
//
// Constraints:
//
// 	The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// 	p != q
// p and q will exist in the BST.

//recursion
//if left and right are equal return the root
//

// const lowestCommonAncestor = function(root, p, q) {
// 	let result = null;
//
// 	const dfs = (node) => {
// 		if (node === null) return false;
//
// 		let left = dfs(node.left);
// 		let right = dfs(node.right);
//
// 		let cur = node === p || node === q;
//
// 		if(left + right + cur >= 2) result = node;
//
// 		return left || right || cur;
// 	}
//
// 	dfs(root);
// 	return result;
// };

//or

var lowestCommonAncestor = function (root, p,q) {

	//base case
	if (root == null) return null
	if((root.val == p.val) || (root.val == q.val)) return root

//	recursive case
	let left = lowestCommonAncestor(root.left,p,q)
	let right = lowestCommonAncestor(root.right,p,q)
	if (left == null) return right
	if (right == null) return left
	return root
};
