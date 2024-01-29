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
 
// Depth First Search
// Time and Space: O(n)
// Left, Right, Root
var postorderTraversal = function(root) {
    let stack = [], result = []

    while (stack.length || root) {
        let prev = result[result.length-1]

        while (root && root.left && root.left.val !== prev) {
            stack.push(root)
            root = root.left
        }
        if (!root) root = stack.pop();
        prev = result[result.length-1]

        if (root.right && root.right.val !== prev) {
            stack.push(root)
            root = root.right
        } else {
            result.push(root.val)
            root = null;
        }
    }
    return result
};

