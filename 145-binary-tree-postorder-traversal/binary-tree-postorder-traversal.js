
// Postorder Traversal
// LEFt, RIGHT, ROOT
// Recursive
var postorderTraversal = function(root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
}