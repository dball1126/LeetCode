// Inorder Traversal
// LEFT, ROOT, RIGHT
// Recursive
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};