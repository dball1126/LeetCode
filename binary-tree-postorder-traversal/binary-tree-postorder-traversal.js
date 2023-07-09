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
var postorderTraversal = function(root) {
    let stack = [], curr = root, postorder = []
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        let prev = postorder[postorder.length-1]
        if (curr.right && curr.right.val !== prev) {
            stack.push(curr)
            curr = curr.right
        } else {
            postorder.push(curr.val)
            curr = null
        }
    }
    return postorder
};