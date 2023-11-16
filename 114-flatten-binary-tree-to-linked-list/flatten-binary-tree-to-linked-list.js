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
var flatten = function(root) {
    let curr = root, stack = [], prev = null;
    
    while (curr || stack.length) {
        if (!curr) curr = stack.pop()
        if (prev) {
            prev.right = curr
        }
        if (curr.right) stack.push(curr.right)
        let temp = curr.left
        curr.left = null
        prev = curr
        curr = temp
    }
    return root;
};