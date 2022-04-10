/**
 * DFS
 * Use Recursion
 * Time and Space O(n)
 */
const diameterOfBinaryTree = (root) => {
    let max = 0;
    const diameter = (node) => {
        if (!node || (!node.left && !node.right)) return 0;
        let [left, right] = [-1, -1]
        if (node.left)
            left = diameter(node.left)
        if (node.right)
            right = diameter(node.right)

        max = Math.max(max,left + right + 2)
        return Math.max(left, right) + 1
    }
    diameter(root)
    return max
}