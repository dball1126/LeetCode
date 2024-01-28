// Depth First Search
// Time and Space: O(n)
// Iterative
var preorderTraversal = function(root) {
    let stack = [], curr = root, result = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        result.push(curr.val);
        if (curr.right) stack.push(curr.right)
        curr = curr.left
    }
    return result;
};