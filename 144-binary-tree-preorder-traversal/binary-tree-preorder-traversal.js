// Iterative
var preorderTraversal = function(root) {
    let curr = root, stack = [], preorder = []
    while (stack.length || curr) {
        if (!curr) curr = stack.pop()
        preorder.push(curr.val)
        if (curr.right) stack.push(curr.right)
        curr = curr.left
    }
    return preorder
};