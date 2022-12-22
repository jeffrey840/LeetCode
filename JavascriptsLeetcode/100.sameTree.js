// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//
// 	Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
//
//
//
// 	Example 1:
//
//
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:
//
//
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:
//
//
// Input: p = [1,2,1], q = [1,1,2]
// Output: false
//
//
// Constraints:
//
// 	The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

//returns a boolean value
//think of how one of them would be false
//1.if p and q are both null return true
//2.if p is null while q isn't return false or vise versa or if values are not the same return false
//return isSomeTree(left for both) and isSomeTree(right for both)

var isSameTree = function(p, q) {

	if(p === null && q === null) return true;
	if((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)){
		return false
	}
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

