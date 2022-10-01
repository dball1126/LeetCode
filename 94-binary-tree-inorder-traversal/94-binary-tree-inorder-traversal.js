/**
 * Left, Root, Right
 * DFS
 * Time & Space: O(n)
 */
var inorderTraversal = (n) => {
    if (!n) return []
    let curr = n, stack = [], result = []
    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        result.push(curr.val)
        curr = curr.right
    }
    return result
}
