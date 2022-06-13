/**
 * DFS & preorder traversal
 * Time and Space: O(n) n for words
 */
var flatten = function(n) {
    let curr = n, stack = [], prev = null
    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)

        if (!prev) {
            prev = curr;
        } else {
            prev.right = curr
        }
        prev.left = null;
        prev = curr
        curr = null
    }
    return n
};