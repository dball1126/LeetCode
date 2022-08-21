/**
 * time: O(n)
 * space: average (-)(log n)
 * worst O(n)
 */
const inorderTraversal = (root) => {
    if (!root) return []
    let stack = [], curr = root, result = []
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop();
        result.push(curr.val)
        curr = curr.right
    }
    return result
}