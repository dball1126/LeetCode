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
    let curr = n, stack = [], result = [];
    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        result.push(curr.val);
        if (curr.right) stack.push(curr.right);
        curr = curr.left;
    }
    return result;
}