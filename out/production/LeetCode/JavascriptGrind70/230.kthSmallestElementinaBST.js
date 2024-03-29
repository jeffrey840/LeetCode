// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
//
//
//
// 	Example 1:
//
//
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:
//
//
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
//
//
// Constraints:
//
// 	The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
//
//
// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?


//use an inorder traversal method


var kthSmallest = function(root, k) {

	// let arr = [];
	inOrder(root,arr);//this contains the in order traversal
	return findKth(arr,k);
};


function inOrder(root, arr) {
	if(!root) return;

	inOrder(root.left,arr);
	arr.push(root.val);
	inOrder(root.right, arr);
}

function findKth (arr,k){

	for(let i = 0;i < arr.length;i++) {
		if(i === k -1) return arr[i];
	}
}
