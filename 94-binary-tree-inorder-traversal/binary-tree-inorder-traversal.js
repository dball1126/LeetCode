// Depth First Search
// Time and Space: (n)
// Iterative
var inorderTraversal = function(root) {
    let result = [], stack = [];
    while (stack.length || root) {
        while (root && root.left) {
            stack.push(root);
            root = root.left;
        }
        if (!root) root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
};
