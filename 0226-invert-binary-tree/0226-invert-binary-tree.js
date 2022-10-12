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
 * @return {TreeNode}
 */
/**
 * DFS.
 * Time and Space: O(n)
 */
var invertTree = function(root) {
    if (!root) return null;
    let tempLeft = root.left, tempRight = root.right
    root.left = invertTree(tempRight)
    root.right = invertTree(tempLeft)
    return root;
};