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
var diameterOfBinaryTree = function(nde) {

    let max = 0;

    const dfs = (root) => {
        if ( !root ) return  0;
        if ( !root.left && !root.right ) return  1;

        let left = dfs(root.left)
        let right = dfs(root.right)

        let next = Math.max(left, right)

        max = Math.max(max, next, left + right)
        return next +1
    }

    dfs(nde)
    return max
};