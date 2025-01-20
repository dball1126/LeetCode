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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const dfs = (nde,min,max) => {
        if (!nde) return;
        let left = -Infinity, right = Infinity;
        if (nde.val > min && nde.val > low) {
            dfs(nde.left, min, nde.val);
        }
        if (nde.val < high && nde.val < max) {
            dfs(nde.right, nde.val, max);
        }
        if (nde.val >= low && nde.val <= high) {
            sum += nde.val;
        }
    }
    dfs(root, -Infinity, Infinity);
    return sum;
};