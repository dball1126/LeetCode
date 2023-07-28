/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(rootNode, p, q) {
    if (!p || !q || !rootNode) return null
    let node = null;
    
    const dfs = (root) => {
        if (node) return;
        if (!root) return;

        let left = dfs(root.left), right = dfs(root.right)
        let found = root.val === p.val || root.val === q.val
   
        if ((found && left) || (found && right) || (left && right)) {
            return node = root;
        }

        if (root.val === p.val) return root;
        if (root.val === q.val) return root;
        if (left) return left
        if (right) return right
    }

    dfs(rootNode)
    return node;
};