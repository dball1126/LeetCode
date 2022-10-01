/**
 * Left, Root, Right
 * DFS
 * Time & Space: O(n)
 */
const inorderTraversal = (n) => {
    if (!n) return []
    return [...inorderTraversal(n.left), n.val, ...inorderTraversal(n.right)]
}