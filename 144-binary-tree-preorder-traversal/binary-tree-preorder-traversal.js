// Depth First Search
// Time and Space: O(n)
// Iterative
var preorderTraversal = function(root) {
    let stack = [], result = []

    while (root || stack.length) {
        if (!root) root = stack.pop();
        result.push(root.val);
        if (root.right) stack.push(root.right)
        root = root.left
    }
    return result;
};
