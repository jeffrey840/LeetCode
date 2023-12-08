class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

function sortedArrayToBST(nums) {
	if (nums.length === 0) return null;

	const mid = Math.floor(nums.length / 2);
	const root = new TreeNode(nums[mid]);

	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid + 1));

	return root;
}






// Example usage
let nums = [-10, -3, 0, 5, 9];
let tree = sortedArrayToBST(nums);
console.log(tree);