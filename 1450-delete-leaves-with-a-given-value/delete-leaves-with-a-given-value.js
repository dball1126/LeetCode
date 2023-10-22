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
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    const dfs = (nde) => {
        if (!nde) return null
        if (nde.val == target && !nde.left && !nde.right) {
            return nde = null
        } else if (!nde.left && !nde.right) {
            return nde;
        }

        let left = dfs(nde.left), right = dfs(nde.right)

        if (!left && !right && nde.val === target) {
            return nde = null;
        }

        nde.left = left, nde.right = right
        return nde
    }   
    return dfs(root) 
};