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
 * @return {number}
 */
/**
    Time and Space: O(n)
 */
const treeHeights = (n) => {
    if (!n) return {max: 0, min: 0};
    if (!n.left && !n.right) return {max: 1, min: 1};
    let left = treeHeights(n.left)
    let right = treeHeights(n.right)
    return {max: Math.max(left.max, right.max) + 1, min: Math.min(left.min, right.min) + 1}
}

var countNodes = function(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    const dfs = (n) => {
        if (!n) return {max: 0, min: 0};
        if (!n.left && !n.right) return {max: 1, min: 1};
    
        let left = treeHeights(n.left)
        let right = treeHeights(n.right)
        let leftSum = 0, rightSum = 0;
        if (left.max + left.min !== 0) {
            if (left.max === left.min) {
                leftSum = 2 ** left.max - 1
            } else if (left.max !== 0) {
                leftSum = countNodes(n.left)
            }
        }
        if (right.max + right.min !== 0) {
            if (right.max === right.min) {
                rightSum = 2 ** right.max - 1
            } else if (right.max !== 0) {
                rightSum = countNodes(n.right)
            }
        }
        return leftSum + rightSum + 1;
    }
    return dfs(node)
};