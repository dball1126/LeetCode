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
// root, left, right
var preorderTraversal = function(root) {
    let curr = root, stack = [], preorder = []

    while (stack.length || curr) {
        if (!curr) curr = stack.pop();
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left;
    }
    return preorder
}
