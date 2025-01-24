/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (!root) return 0;
    let sum = 0;
    const dfs = (nde, num) => {
        if (!nde.left && !nde.right) return sum += parseInt(num + nde.val);
        if (nde.left) dfs(nde.left, num + nde.val)
        if (nde.right) dfs(nde.right, num + nde.val)
    }
    dfs(root, "");
    return sum;
};