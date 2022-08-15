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
* Time and Space: O(n)
*/
var getLonelyNodes = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return []
    let result = []
    const dfs = (node, has) => {
        if (!node) return;
        if (!has) result.push(node.val)
        has = true
        if (!node.left || !node.right) has = false
        dfs(node.left, has)
        dfs(node.right, has)
    }
    dfs(root, true)
    return result
};