class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

//import javax.swing.tree.TreeNode;

class rootEqualsSumOfChildren {
    public boolean checkTree(TreeNode root) {
        TreeNode node1 =root.left;
        TreeNode node2 = root.right;
        if(root.val == (node1.val+node2.val)) return true;
        return false;

    }
}

