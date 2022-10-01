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
    if (!root) return []
    let result = [], prev = null, curr = root, stack = []
    while (curr || stack.length) {
        while (curr && curr.left && curr.left.val !== prev) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        if (curr.right && curr.right.val !== prev) {
            stack.push(curr)
            curr = curr.right
        } else if (prev !== curr.val) {
            result.push(curr.val)
            prev = curr.val
            curr = null
        }
    }
    return result;
}
