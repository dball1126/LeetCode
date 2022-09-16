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
 * @return {string}
 */
/**
 * Root, Left, Right
 * DFS
 * Time and Space: O(n)
 */
var tree2str = function(n) {
    if (!n) return "";
    const val = n.val + ""
    if (!n.left && !n.right) return val;

    if (!n.right) {
        return val + "(" + tree2str(n.left) + ")";
    } else if (!n.left) {
        return val + "()" + "(" + tree2str(n.right) + ")";
    } else {
        return val + "(" + tree2str(n.left) + ")" + "(" + tree2str(n.right) + ")"
    }
};