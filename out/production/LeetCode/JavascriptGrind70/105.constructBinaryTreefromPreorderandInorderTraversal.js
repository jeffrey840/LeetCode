// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
//
//
//
// 	Example 1:
//
//
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:
//
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
//
//
// Constraints:
//
// 	1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// 	Each value of inorder also appears in preorder.
// 	preorder is guaranteed to be the preorder traversal of the tree.
// 	inorder is guaranteed to be the inorder traversal of the tree.


/*

construct a  binary tree for inorder and preorder

pre-order root -> left -> right
in-order left -> root -> right

the 0th index will be our root

match the preorder root with the inorder root,

first create a base case


* */




var buildTree = function(preorder, inorder) {

	if(!preorder.length || !inorder.length) return null;// base case
		let root = new TreeNode(preorder[0]);//instantiate a new Tree node with preorder as the 0 index
		let mid = inorder.indexOf(root.val);//getting the index of where the root is in the inorder array

		//this will result in the left side of the tree
		root.left = buildTree(preorder.slice(1, mid +1), inorder.slice(0,mid));

		//this  will result in the right side of the tree
		root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

		return root;

};