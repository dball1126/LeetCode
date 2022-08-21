/**
 * 
 */
var postorderTraversal = function(root) {
    if (!root) return []
    let stack = [], curr = root, result = [], prev = null
    while (curr || stack.length) {
       while (curr) {
           if (prev && curr.left && prev.val === curr.left.val) break
           stack.push(curr)
           if(curr.left) prev = curr
           curr = curr.left
       }
       if (!curr) curr = stack.pop()

       if (curr.right) {
           if (prev && prev.val === curr.right.val) {
               result.push(curr.val)
               prev = curr
               curr = null
           } else {
              stack.push(curr)
               prev = curr
               curr = curr.right
           }
       } else {
           result.push(curr.val)
           prev = curr
           curr = null
       }
    }
    return result 
};