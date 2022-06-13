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
    let stack = [], curr = root, result = [], prev = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        if (!prev && curr && curr.right || (prev && curr.right && prev.val !== curr.right.val)) {
            stack.push(curr)
            curr = curr.right;
        } else {
            prev = curr
            result.push(curr.val)
            curr = null;
        }
   }
   return result
};