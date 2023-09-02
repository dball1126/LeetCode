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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// DFS, STACK
// Time: O(n)
// Space: log(n)
var flatten = function(root) {
    let copyR = null, curr = root, stack = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        if (copyR) {
            copyR.right = curr
            copyR.left = null
            copyR = curr
        } else {
            copyR = curr
        }
        if (curr.right) stack.push(curr.right)
        if (curr.left) {
            curr = curr.left
        } else {
            curr = null
        }
    }
    return root
};