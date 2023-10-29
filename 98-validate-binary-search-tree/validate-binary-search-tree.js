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
 * @return {boolean}
 */
// Iterative Depth-First-Search
// Time and Space: O(n)
var isValidBST = function(root) {
    let stack = [[root, -Infinity, Infinity]]
    while (stack.length) {
        let [nde, min, max] = stack.pop();

        if (!nde) continue;
        if (nde.val <= min || nde.val >= max) return false;
        stack.push([nde.left, min, nde.val])
        stack.push([nde.right, nde.val, max])
    }
    return true;
};