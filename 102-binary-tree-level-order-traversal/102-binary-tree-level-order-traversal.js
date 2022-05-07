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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let [q, result] = [[[root]], []]
    while (q.length) {
        let nodes = q.shift();
        let [lvl, nxtLvl] = [[],[]]
        nodes.forEach(n => {
            lvl.push(n.val)
            if (n.left) nxtLvl.push(n.left)
            if (n.right) nxtLvl.push(n.right)
        })
        if (nxtLvl.length) q.push(nxtLvl)
        if (lvl.length) result.push(lvl)
    }
    return result;
};