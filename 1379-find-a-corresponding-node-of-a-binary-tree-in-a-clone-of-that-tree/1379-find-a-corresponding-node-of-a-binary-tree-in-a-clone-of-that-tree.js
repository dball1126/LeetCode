/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

/**
 * DFS Time and space O(n)
 */
var getTargetCopy = function(original, cloned, target) {
    let found;
    const dfs = (n) => {
        if (!n) return
        if(n.val === target.val) {
            return found = n
        }
        dfs(n.left)
        dfs(n.right)
    }
    dfs(cloned)
    return found
};