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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    
    let postorder = [];
    let stack = [root];
    
    while (stack.length > 0) {
        let node = stack.pop();
        
        // Add the current node's value to the postorder array
        postorder.push(node.val);
        
        // Push the left and right children to the stack
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    // Since we were adding nodes to the postorder array in reverse order,
    // we need to reverse the array to get the correct postorder traversal
    return postorder.reverse();
};
