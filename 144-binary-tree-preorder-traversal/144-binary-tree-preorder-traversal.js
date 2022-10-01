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
/**
 * Root, left, right
 * DFS
 * Time and space: O(n)
 */
 var preorderTraversal = function(n) {
     if (!n) return [];
     return [n.val, ...preorderTraversal(n.left), ...preorderTraversal(n.right)]
 }