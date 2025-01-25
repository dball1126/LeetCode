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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if (!root) return true;

    let allowChildren = true;
    const queue = [[[root, allowChildren]]];
    while (queue.length) {
        let level = queue.shift()
        let newLevel = []
        for (let [n, allowChild] of level) {
            if (!allowChild) allowChildren = false;
            if (n.right && !n.left) return false;
            if ((n.left || n.right) && !allowChildren) {
                return false;
                }
            if (n.left && !n.right || (!n.left)) allowChildren = false;
            if (n.left) newLevel.push([n.left, allowChildren]);
            if (n.right) newLevel.push([n.right, allowChildren]);
        }
        if (newLevel.length) queue.push(newLevel)
    }

    return true;
};
