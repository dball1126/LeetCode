/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Iterative Depth-First-Search
// Time and Space: O(n)
var countNodes = function(root) {
    if (!root) return 0;
    let stack = [root], max = 0
    
    while (stack.length) {
        let nde = stack.pop();
        max+=1

        if (nde.left) stack.push(nde.left)
        if (nde.right) stack.push(nde.right)
    }
    return max
};

