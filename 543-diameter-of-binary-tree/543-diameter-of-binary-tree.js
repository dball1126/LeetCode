/**
 * Time: O(n)
 * Space: O(h) height of tree is average   O(n) is worst case
 */
var diameterOfBinaryTree = function(root) {
    let max = 0
    const dfs = (node) => {
        if (!node) return 0
        if (!node.left && !node.right) return 0

        let left = 0, right = 0
        if (node.left) left = dfs(node.left) + 1
        if (node.right) right = dfs(node.right) + 1
        let result = Math.max(left, right)
        max = Math.max(max, result, left + right)
        return result
    }
    dfs(root)
    return max
};