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
 * @return {TreeNode}
 */
// Depth-First-Search
// Time and Space: O(n)
var bstToGst = function(root) {
    
    const getAllNodes = (nde) => {
        if (!nde) return []
        return [...getAllNodes(nde.left), nde, ...getAllNodes(nde.right)]
    }
    const nodes = getAllNodes(root)
    const n = nodes.length

    for (let i = n-1; i >= 0; i--) {
        const val = i + 1 < n ? nodes[i+1].val : 0
        nodes[i].val += val        
    }
    return root;
};