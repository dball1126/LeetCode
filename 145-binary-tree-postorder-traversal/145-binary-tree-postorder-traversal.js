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
 * DFS
 * Left, Right, Root
 * Time and Space: O(n)
 */
 var postorderTraversal = function(root) {
    if (!root) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};