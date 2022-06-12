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
var inorderTraversal = function(n) {
   let curr = n, stack = [], result = []
   while (curr || stack.length) {
       while (curr) {
           stack.push(curr)
           curr = curr.left
       }
       if (!curr) curr = stack.pop();
       result.push(curr.val)
       curr = curr.right;
   }
   return result;
}