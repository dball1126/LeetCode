// Depth First Search
// Recursive
// Time and Space: (n)
var inorderTraversal = function(root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]    
};
