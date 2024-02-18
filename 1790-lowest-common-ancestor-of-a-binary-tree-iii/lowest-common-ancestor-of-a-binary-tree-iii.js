/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// Depth First Search
// Time and Space: O(n)
var lowestCommonAncestor = function(p, q) {
    let pNde = false, qNde = false, result
    const getRoot = (nde) => {
        return nde.parent && nde.parent !== null ? getRoot(nde.parent) : nde
    }
    
    const dfs = (root) => {
        if (result) return;
        if (!root) return false;

        let left = dfs(root.left), right = dfs(root.right)
        let l = (root.val === p.val)
        let r = (root.val === q.val)
      
        if (!pNde && l) pNde = true
        if (!qNde && r) qNde = true
        if (!result) {
            if ((left && right) || (l & right) || (r && left) 
            || (r && right)
            || (l && left)) {
                result = root
            }
        }
        return left || right || l || r
    }
    
    dfs(getRoot(p))
    return result
};  