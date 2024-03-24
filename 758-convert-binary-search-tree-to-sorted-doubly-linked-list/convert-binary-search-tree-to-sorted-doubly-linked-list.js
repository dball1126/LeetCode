/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// InOrder Traversal
// Time and Space: O(n)
var treeToDoublyList = function(root) {
    if (!root) return root


    const inOrderDfs = (nde) => { // O(n)
        if (!nde) return []
        return [...inOrderDfs(nde.left), nde, ...inOrderDfs(nde.right)]
    }
    const inorder = inOrderDfs(root)
    for (let i = 0; i < inorder.length; i++) { // O(n)
        let next = i+1 < inorder.length ? inorder[i+1] : inorder[0]
        let prev = i-1 >= 0 ? inorder[i-1] : inorder[inorder.length-1]
        let curr = inorder[i]
        curr.left = prev;
        curr.right = next;
    }
    return inorder[0]
};