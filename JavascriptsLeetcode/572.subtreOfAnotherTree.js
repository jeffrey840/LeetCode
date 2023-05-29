function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

function isSubtree(root, subRoot) {
	if (root === null) {
		return false;
	}

	if (isSameTree(root, subRoot)) {
		return true;
	}

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p, q) {
	if (p === null && q === null) {
		return true;
	}

	if (p === null || q === null) {
		return false;
	}

	return (
		p.val === q.val &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
}

