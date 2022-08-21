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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return []

    let stack = [], curr = root, result = []

    while (stack.length || curr) {
        if (!curr) curr = stack.pop();
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)
        result.push(curr.val)
        curr = null
    }
    return result
};