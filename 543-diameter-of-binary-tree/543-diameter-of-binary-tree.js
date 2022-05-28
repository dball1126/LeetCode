/**
 * recursion, dfs, max variable outside function
 * time and space O(n)
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;
    let dfs = (node) => {
        if (!node || (!node.left && !node.right)) return 0;
        let [left, right] = [0,0]
        if (node.left) left = 1 + dfs(node.left)
        if (node.right) right = 1 + dfs(node.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) 
    }
    dfs(root)
    return max;
};