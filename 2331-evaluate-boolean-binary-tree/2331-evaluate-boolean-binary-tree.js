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
var evaluateTree = function(n) {
    if (n.val === 0 && !n.left && !n.right) return false
    if (n.val === 1 && !n.left && !n.right) return true

    let left = n.left ? evaluateTree(n.left) : undefined;
    let right = n.right ? evaluateTree(n.right) : undefined;

    if (left !== undefined && right !== undefined && n.val === 2) {
        return left || right
    } else if (left !== undefined && right !== undefined && n.val === 3) {
        return left && right
    } else if (left !== undefined) {
        return left
    } else {
        return right
    }
};