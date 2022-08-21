/**
 * time: O(n)
 * space: average (-)(log n)
 * worst O(n)
 */
const inorderTraversal = (root) => {
if (!root) return []
return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
} 