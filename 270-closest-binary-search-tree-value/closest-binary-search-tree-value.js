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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, tgt) {
    let closestVal = root.val;
    const dfs = (nde) => {
        if (!nde) return;
        if (nde.val === tgt) {
            return closestVal = nde.val;
        }
        let diff = Math.abs(tgt - nde.val);
        let curr = Math.abs(tgt - closestVal);

        if (diff < curr) {
            closestVal = nde.val;
        } else if (diff === curr) {
            closestVal = Math.min(nde.val, closestVal);
        }
        if (nde.val > tgt) {
            dfs(nde.left);
        } else {
            dfs(nde.right);
         }
    }
    dfs(root);
    return closestVal;
};