// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//
// 	According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
//
//
//
// Example 1:
//
//
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:
//
//
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// 	Example 3:
//
// Input: root = [1,2], p = 1, q = 2
// Output: 1

var lowestCommonAncestor = function(root, p, q) {
	//First, we check if the root node is null. If it is, we return null.
	if (!root) return null;

	//Then, we check if the root node is equal to either p or q. If it is, we return the root node because root is one of the nodes for which we want to find the lowest common ancestor.
	if (root === p || root === q) return root;

	//If the root node is not null and not equal to either p or q, we make two recursive calls, one for the left subtree and one for the right subtree. We store the results of these two calls in the variables left and right.
	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);

	//If both left and right are not null, it means that we have found both p and q in different subtrees of the root. In this case, we return the root node as the lowest common ancestor.
	if (left && right) return root;

	//If either left or right is not null, it means that we have found either p or q in the subtree rooted at root. In this case, we return the node that is not null as the lowest common ancestor.
	return left ? left : right;
};
