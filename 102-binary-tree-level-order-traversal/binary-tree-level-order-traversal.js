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
// Breadth-First-Search
// Time and Space: O(n)...for the nodes in root
var levelOrder = function(root) {
    const result = []
    const queue = []
    if (!root) return []
    queue.push([root])

    while (queue.length) {
        const level = queue.shift()
        const newLvl = []
        const levelResult = []

        while (level.length) {
            let next = level.shift()
            levelResult.push(next.val)
            if (next.left) newLvl.push(next.left)
            if (next.right) newLvl.push(next.right)
        }
        if (newLvl.length) queue.push(newLvl)
        result.push(levelResult)
    }
    return result;
};