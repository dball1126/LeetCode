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
// Recursive Depth-First-Search
// Time: O(n)
// Space: O(h) if tree is balanced
var diameterOfBinaryTree = function(root) {

    let diameter = 0

    const dfs = (nde) => {
        if (!nde) return 0



        let left = dfs(nde.left), right = dfs(nde.right)
        diameter = Math.max(diameter, left, right, left + right)

        return Math.max(left, right) + 1
    }
    dfs(root)

    return diameter
};