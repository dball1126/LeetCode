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
var minDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    if (left === 0) left = Infinity
    if (right === 0) right = Infinity
    return 1 + Math.min(left, right)
};