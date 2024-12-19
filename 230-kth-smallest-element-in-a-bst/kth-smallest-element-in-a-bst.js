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
 * @param {number} k
 * @return {number}
 */
// Preorder Traversal;
// Time: O(log(n)) in best case....O(n) worst case.
// Space: O(h)...if the tree is balanced
var kthSmallest = function(root, k) {
    let preorder = [], curr = root, stack = [];
    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr);
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        preorder.push(curr.val);
        if (preorder.length === k) return preorder[preorder.length-1];
        curr = curr.right;
    }
    return preorder[preorder.length-1]
};