/**
 * Recursion, DFS
 * Time and Space: O(n)
 */
const maxDepth = (n) => {
    if (!n) return 0;
    return Math.max(maxDepth(n.left), maxDepth(n.right)) + 1;
}