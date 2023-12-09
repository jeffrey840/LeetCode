// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
//
//
//
// Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
//
// Input: root = [1]
// Output: [[1]]
// Example 3:
//
// Input: root = []
// Output: []
//
//
// Constraints:
//
// 	The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

let levelOrder = function(root) {

	//if root is empty return an empty array
	if(!root) return [];

	// initialize the queue
	const queue = [root];
	const result = [];
	//while there is something in the queue, the while loop will run
	while (queue.length) {
		//pulling out the len at each iteration
		let len = queue.length;
		//whatever is currently in the queue is going to get pushed into the result
		//takes a copy of whatever was in the queue and stores it in the array
		result.push(queue.map(node => node.val));

		//inner while loop
		while (len --) {
			let node = queue.shift();
			if(node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return result;
};

